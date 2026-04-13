import Link from 'next/link';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { TEMPLATES } from '@/lib/templates';
import { db } from '@/db';
import { receipts } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export default async function AppPage() {
  const token = (await cookies()).get('token')?.value;
  const session = token ? await verifyToken(token) : null;

  let userReceipts: typeof receipts.$inferSelect[] = [];
  if (session) {
    try {
      userReceipts = await db.select().from(receipts).where(eq(receipts.userId, session.userId)).orderBy(desc(receipts.createdAt)).limit(10);
    } catch {
      // DB not initialized yet
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center text-white text-lg font-bold">R</div>
            <span className="font-bold text-slate-900 text-lg">Recibo Express</span>
          </Link>
          <nav className="flex items-center gap-4">
            {session ? (
              <>
                <span className="text-sm text-slate-500">{session.email}</span>
                <Link href="/" className="text-slate-600 hover:text-green-600 text-sm font-medium">Início</Link>
              </>
            ) : (
              <>
                <Link href="/login" className="text-slate-600 hover:text-green-600 text-sm font-medium">Entrar</Link>
                <Link href="/signup" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 text-sm">Cadastrar</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {session ? `Olá, ${session.email.split('@')[0]}` : 'Emitir um recibo'}
          </h1>
          <p className="text-slate-600">Escolha um modelo e gere seu recibo profissional em PDF.</p>
        </div>

        {/* Template selection */}
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Escolha um modelo</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {TEMPLATES.map((template) => (
            <Link key={template.id} href={`/app/generate?template=${template.id}`}
              className="bg-white rounded-xl shadow-sm border border-green-100 p-5 text-center hover:shadow-md hover:border-green-200 transition">
              <span className="text-3xl">{template.icon}</span>
              <h3 className="font-semibold text-slate-900 mt-2 text-sm">{template.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{template.description}</p>
            </Link>
          ))}
        </div>

        {/* Recent receipts */}
        {session && userReceipts.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Recibos recentes</h2>
            <div className="bg-white rounded-xl shadow-sm border border-green-100 divide-y divide-green-50">
              {userReceipts.map((r) => (
                <div key={r.id} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900 text-sm">{TEMPLATES.find(t => t.id === r.templateId)?.name || r.templateId}</p>
                    <p className="text-xs text-slate-500">R$ {r.amount} · {r.status}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${r.status === 'completed' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}`}>
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {!session && (
          <div className="bg-green-50 rounded-xl border border-green-100 p-8 text-center">
            <h2 className="font-bold text-slate-900 mb-2">Comece grátis — 3 recibos por mês</h2>
            <p className="text-slate-600 text-sm mb-4">Cadastre-se para salvar seus recibos e acessar o histórico.</p>
            <div className="flex gap-3 justify-center">
              <Link href="/signup" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90">Cadastrar grátis</Link>
              <Link href="/login" className="border border-green-200 text-green-700 font-semibold px-6 py-2 rounded-lg hover:bg-green-50">Entrar</Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}