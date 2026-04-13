import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/db';
import { receipts } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import { verifyToken } from '@/lib/auth';
import { getTemplateById, renderReceipt } from '@/lib/templates';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const token = (await cookies()).get('token')?.value;
    if (!token) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    const payload = await verifyToken(token);
    if (!payload) return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
    const result = await db.select().from(receipts).where(eq(receipts.userId, payload.userId)).orderBy(desc(receipts.createdAt));
    return NextResponse.json({ receipts: result });
  } catch (error) {
    console.error('GET /api/receipts error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const token = (await cookies()).get('token')?.value;
    if (!token) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    const payload = await verifyToken(token);
    if (!payload) return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
    const { templateId, formData } = await request.json();
    const template = getTemplateById(templateId);
    if (!template) return NextResponse.json({ error: 'Template não encontrado' }, { status: 404 });
    const content = renderReceipt(template, formData);
    const receiptId = crypto.randomUUID();
    const now = new Date();
    await db.insert(receipts).values({
      id: receiptId,
      userId: payload.userId,
      templateId,
      planType: template.planType,
      status: 'draft',
      data: JSON.stringify({ ...formData, content }),
      amount: template.price,
      createdAt: now,
      updatedAt: now,
    });
    return NextResponse.json({ receiptId });
  } catch (error) {
    console.error('POST /api/receipts error:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}