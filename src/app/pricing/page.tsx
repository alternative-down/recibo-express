import Link from "next/link";
import { PLANS } from "@/lib/plans";

export const metadata = { title: "Preços - Recibo Express" };

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center text-white text-lg">R</div>
            <span className="font-bold text-slate-900 text-lg">Recibo Express</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/#como-funciona" className="text-slate-600 hover:text-green-600 text-sm font-medium">Como funciona</Link>
            <Link href="/#pricing" className="text-slate-600 hover:text-green-600 text-sm font-medium">Preços</Link>
            <Link href="/login" className="text-slate-600 hover:text-green-600 text-sm font-medium">Entrar</Link>
            <Link href="/signup" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 text-sm">Cadastrar</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Planos simples, sem surpresa</h1>
          <p className="text-xl text-slate-600">Cancele quando quiser. Sem taxa de cancelamento.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {PLANS.map((plan) => {
            const ctaHref =
              plan.id === "free"
                ? "/signup"
                : "/checkout?plan=pro";

            return (
              <div
                key={plan.id}
                className={
                  plan.recommended
                    ? "rounded-2xl p-8 flex flex-col bg-gradient-to-br from-green-600 to-emerald-500 text-white shadow-lg"
                    : "rounded-2xl p-8 flex flex-col bg-white border border-green-100 shadow-sm"
                }
              >
                {plan.recommended && (
                  <span className="text-xs font-bold text-green-100 bg-white/20 px-3 py-1 rounded-full w-fit mb-3">
                    Recomendado
                  </span>
                )}

                <h2 className={`text-xl font-bold mt-1 mb-1 ${plan.recommended ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h2>
                <p className={`text-sm mb-4 ${plan.recommended ? "text-green-100" : "text-slate-500"}`}>
                  {plan.id === "free"
                    ? "Para quem precisa de recibos pontuais."
                    : "Para quem emite recibos com frequência."}
                </p>

                <div className="mb-2">
                  <span className={`text-4xl font-bold ${plan.recommended ? "text-white" : "text-slate-900"}`}>
                    {plan.price === 0 ? "Grátis" : `R$ ${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className={`text-sm ${plan.recommended ? "text-green-100" : "text-slate-500"}`}>/mês</span>
                  )}
                </div>

                <p className={`text-sm mb-6 ${plan.recommended ? "text-green-100" : "text-slate-500"}`}>
                  {plan.receiptsPerMonth === Infinity
                    ? "Recibos ilimitados"
                    : `Até ${plan.receiptsPerMonth} recibos/mês`}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm flex items-start gap-2 ${plan.recommended ? "text-green-50" : "text-slate-600"}`}
                    >
                      <span>✅</span> {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={ctaHref}
                  className={
                    plan.recommended
                      ? "block text-center py-3 rounded-xl font-semibold transition bg-white text-green-600 hover:opacity-90"
                      : "block text-center py-3 rounded-xl font-semibold transition bg-green-600 text-white hover:opacity-90"
                  }
                >
                  {plan.price === 0 ? "Começar grátis →" : "Assinar →"}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Cancele quando quiser. Sem taxa de cancelamento.
        </p>
      </main>
    </div>
  );
}
