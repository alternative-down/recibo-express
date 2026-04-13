import Link from "next/link";

export const metadata = { title: "Preços - Recibo Express" };

const PLANS = [
  {
    id: 'free',
    name: 'Grátis',
    price: 0,
    priceLabel: 'R$ 0',
    period: '',
    description: 'Para quem precisa de recibos pontuais.',
    features: ['1 recibo por mês', 'Todos os modelos', 'Download em PDF', 'Branding do Recibo Express', 'Sem cadastro obrigatório'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9.9,
    priceLabel: 'R$ 9,90',
    period: '/mês',
    description: 'Para profissionais que emitem recibos com frequência.',
    features: ['Recibos ilimitados', 'Todos os modelos', 'Download em PDF', 'Sem branding', 'Histórico completo', 'Prioridade no suporte'],
    recommended: true,
  },
];

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
            <Link href="/login" className="text-slate-600 hover:text-green-600 text-sm font-medium">Entrar</Link>
            <Link href="/signup" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 text-sm">Cadastrar</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Planos simples, sem surpresa</h1>
        <p className="text-xl text-slate-600 mb-16">Cada recibo gera um PDF profissional. Comece grátis.</p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PLANS.map(plan => (
            <div key={plan.id} className={`relative bg-white rounded-2xl p-8 text-left border ${plan.recommended ? 'border-green-400 shadow-lg shadow-green-100' : 'border-green-100 shadow-sm'}`}>
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Mais Popular
                </div>
              )}
              <h2 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h2>
              <p className="text-slate-500 text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">{plan.priceLabel}</span>
                {plan.period && <span className="text-slate-500">{plan.period}</span>}
              </div>
              <ul className="space-y-2 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-green-600 mt-0.5">✅</span> {f}
                  </li>
                ))}
              </ul>
              {plan.id === 'free' ? (
                <Link href="/app/generate" className="block text-center bg-slate-100 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-200 transition">
                  Começar grátis →
                </Link>
              ) : (
                <Link href={`/checkout?plan=${plan.id}`} className="block text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition">
                  Assinar Pro →
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-sm text-slate-500 mt-8">Cancele quando quiser. Sem compromisso.</p>
      </main>
    </div>
  );
}
