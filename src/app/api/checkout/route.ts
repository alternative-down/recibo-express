import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { orders, subscriptions, users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { verifyToken } from '@/lib/auth';

const ASAAS_API_KEY = process.env.ASAAS_API_KEY || '';
const ASAAS_ENDPOINT = 'https://api.asaas.com/api/v3';

type BillingType = 'PIX' | 'BOLETO' | 'CREDIT_CARD';

const PLAN_PRICES: Record<string, number> = {
  individual: 19,
  ilimitado: 49,
};

function resolveBillingType(method?: string): BillingType {
  switch (method) {
    case 'boleto': return 'BOLETO';
    case 'credit_card': return 'CREDIT_CARD';
    case 'pix':
    default: return 'PIX';
  }
}

async function fetchPixQrCode(paymentId: string) {
  try {
    const res = await fetch(`${ASAAS_ENDPOINT}/payments/${paymentId}/pixQrCode`, {
      headers: { access_token: ASAAS_API_KEY },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = (await cookies()).get('token')?.value;
    if (!token) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    const payload = await verifyToken(token);
    if (!payload) return NextResponse.json({ error: 'Token inválido' }, { status: 401 });

    const { planId, paymentMethod } = await request.json();
    if (!planId || !['individual', 'ilimitado'].includes(planId)) {
      return NextResponse.json({ error: 'Plano inválido' }, { status: 400 });
    }

    const [user] = await db.select().from(users).where(eq(users.id, payload.userId)).limit(1);
    if (!user) return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });

    if (!ASAAS_API_KEY) return NextResponse.json({ error: 'Gateway indisponível' }, { status: 503 });

    const price = PLAN_PRICES[planId];
    const billingType = resolveBillingType(paymentMethod);

    // Ensure Asaas customer
    let customerId = user.asaasCustomerId;
    if (!customerId) {
      const customerRes = await fetch(`${ASAAS_ENDPOINT}/customers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', access_token: ASAAS_API_KEY },
        body: JSON.stringify({ email: user.email, name: user.email.split('@')[0] }),
      });
      if (customerRes.ok) {
        const customer = await customerRes.json();
        customerId = customer.id;
        await db.update(users).set({ asaasCustomerId: customerId }).where(eq(users.id, user.id));
      } else {
        return NextResponse.json({ error: 'Erro ao criar cliente Asaas' }, { status: 502 });
      }
    }

    const subRes = await fetch(`${ASAAS_ENDPOINT}/subscriptions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', access_token: ASAAS_API_KEY },
      body: JSON.stringify({
        customer: customerId,
        billingType,
        nextDueDate: new Date().toISOString().split('T')[0],
        value: price,
        cycle: 'MONTHLY',
        description: `Recibo Express ${planId === 'ilimitado' ? 'Ilimitado' : 'Individual'}`,
        externalReference: user.id,
        notificationDisabled: false,
      }),
    });

    if (!subRes.ok) {
      const err = await subRes.text();
      return NextResponse.json({ error: `Erro Asaas: ${err}` }, { status: 502 });
    }

    const subscription = await subRes.json();
    const subId = crypto.randomUUID();

    await db.insert(subscriptions).values({
      id: subId,
      userId: user.id,
      asaasSubscriptionId: subscription.id,
      planId,
      status: 'inactive',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Fetch first payment for PIX QR code
    let pixQrCode = null;
    if (billingType === 'PIX') {
      try {
        const subPayments = await fetch(`${ASAAS_ENDPOINT}/subscriptions/${subscription.id}/payments`, {
          headers: { access_token: ASAAS_API_KEY },
        });
        if (subPayments.ok) {
          const paymentsData = await subPayments.json();
          const firstPayment = paymentsData.data?.[0];
          if (firstPayment?.id) {
            pixQrCode = await fetchPixQrCode(firstPayment.id);
          }
        }
      } catch {
        // ignore
      }
    }

    return NextResponse.json({
      subscriptionId: subscription.id,
      subId,
      pixQrCode,
      billingType,
      amount: price,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}