import Link from "next/link";

export const metadata = { title: "Preços - Recibo Express" };

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center text-white text-lg">📄</div>
            <span className="font-bold text-slate-900 text-lg">Recibo Express</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/templates" className="text-slate-600 hover:text-green-600 text-sm font-medium">Templates</Link>
            <Link href="/login" className="text-slate-600 hover:text-green-600 text-sm font-medium">Entrar</Link>
            <Link href="/signup" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 text-sm">Cadastrar</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Planos simples, sem surpresa</h1>
        <p className="text-xl text-slate-600 mb-12">Cada recibo gera um PDF profissional. Comece grátis.</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-8 text-left">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Basic</h2>
            <p className="text-slate-500 mb-6">Para quem precisa de recibos pontuais.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">R$ 19</span>
              <span className="text-slate-500">/recibo</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-slate-600">
              {['Recibo de Serviço', 'Recibo de Aluguel', 'Recibo de Venda', 'PDF para download'].map(f => (
                <li key={f} className="flex items-center gap-2">✅ {f}</li>
              ))}
            </ul>
            <Link href="/templates" className="block text-center bg-green-600 text-white font-semibold py-3 rounded-xl hover:opacity-90">
              Gerar recibo Basic →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl shadow-lg p-8 text-left text-white">
            <h2 className="text-xl font-bold mb-2">Pro</h2>
            <p className="text-green-100 mb-6">Para profissionais liberais que emitem vários recibos.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">R$ 29</span>
              <span className="text-green-200">/recibo</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-green-50">
              {['Todos os templates Basic', 'Recibo de Honorários', 'Prioridade no suporte', 'Histórico de recibos'].map(f => (
                <li key={f} className="flex items-center gap-2">✅ {f}</li>
              ))}
            </ul>
            <Link href="/templates" className="block text-center bg-white text-green-600 font-bold py-3 rounded-xl hover:opacity-90">
              Gerar recibo Pro →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}