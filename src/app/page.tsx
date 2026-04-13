import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center text-white text-lg">
              R
            </div>
            <span className="font-bold text-slate-900 text-lg">Recibo Express</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="#como-funciona" className="text-slate-600 hover:text-green-600 text-sm font-medium">Como funciona</Link>
            <Link href="#modelos" className="text-slate-600 hover:text-green-600 text-sm font-medium">Modelos</Link>
            <Link href="#pricing" className="text-slate-600 hover:text-green-600 text-sm font-medium">Preços</Link>
            <Link href="/login" className="text-slate-600 hover:text-green-600 text-sm font-medium">Entrar</Link>
            <Link href="/signup" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 text-sm">Emitir recibo →
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          {/* Badge row */}
          <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Grátis</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">2 minutos</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Sem cadastro</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Recibo Profissional em 2 Minutos.<br />Grátis.
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            O autônomo brasileiro merece um recibo bonito, válido e profissional — sem Word, sem complicação.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/signup" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition text-lg">
              Emitir Recibo Grátis →
            </Link>
            <Link href="/login" className="text-slate-600 hover:text-green-600 font-medium px-4 py-4 text-lg">
              Já usei. Fazer login →
            </Link>
          </div>
        </section>

        {/* Social proof row */}
        <section className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {[
              "✓ 100% Gratuito",
              "✓ PDF profissional",
              "✓ Modelos prontos",
              "✓ Sem cadastro",
              "✓ Válido para qualquer situação",
            ].map((badge) => (
              <span key={badge} className="text-sm font-medium text-slate-600">{badge}</span>
            ))}
          </div>
        </section>

        {/* Problema → Solução */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Chega de recibo amassado no WhatsApp
          </h2>
          <div className="bg-white rounded-2xl border border-green-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 bg-slate-50">
                <p className="text-xs font-bold text-slate-500 uppercase mb-4">Problema</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <p className="text-sm text-slate-600">Word demora e fica feio</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <p className="text-sm text-slate-600">Cliente pede &quot;algo formal&quot;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <p className="text-sm text-slate-600">Recibo sem valor</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-green-600 uppercase mb-4">Solução</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <p className="text-sm text-slate-600">Recibo pronto em 2 minutos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <p className="text-sm text-slate-600">PDF profissional com um clique</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <p className="text-sm text-slate-600">Dados completos, valor fiscal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            Tudo que um recibo profissional precisa ter
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⏱️",
                title: "Em 2 minutos",
                desc: "Preencha os dados, escolha o modelo. PDF pronto."
              },
              {
                icon: "📋",
                title: "Modelos prontos",
                desc: "Clássico, Moderno, Simples — cada um com visual profissional."
              },
              {
                icon: "📥",
                title: "PDF Profissional",
                desc: "Baixe em PDF. Envie por WhatsApp, e-mail ou salve no celular."
              },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-green-100 p-6 text-left">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="font-bold text-slate-900 mt-3 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">Como funciona</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Escolha o modelo",
                desc: "3 modelos prontos: Clássico, Moderno, Simples."
              },
              {
                step: "2",
                title: "Preencha os dados",
                desc: "Emitente, recebedor, valor, data, motivo. Sem complicação."
              },
              {
                step: "3",
                title: "Baixe e envie",
                desc: "PDF imediato. Envie por WhatsApp, e-mail ou como preferir."
              },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-4 bg-white rounded-xl border border-green-100 p-6">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social proof */}
        <section className="max-w-4xl mx-auto px-6 py-12 text-center">
          <p className="text-slate-500 text-sm">
            Feito para autônomos e PMEs brasileiras.
          </p>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Dúvidas frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "O recibo é válido?",
                a: "Sim. Um recibo com os dados das partes, valor, data e assinatura tem valor fiscal para fins de comprovação de pagamento entre pessoas físicas ou jurídicas."
              },
              {
                q: "É gratuito?",
                a: "Sim. Você pode emitir 1 recibo por mês sem pagar nada. Acima disso, o plano Pro (R$ 9,90/mês) dá recibos ilimitados, sem branding e export em PDF."
              },
              {
                q: "Preciso de CNPJ?",
                a: "Não necessariamente. O recibo aceita CPF do emitente — perfeito para autônomos e freelancers."
              },
              {
                q: "Como envio para o cliente?",
                a: "Você baixa o PDF e envia por WhatsApp, e-mail ou qualquer meio que preferir."
              },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-green-100 group">
                <summary className="p-5 font-semibold text-slate-900 cursor-pointer hover:text-green-600 list-none flex items-center justify-between">
                  {item.q}
                  <span className="text-green-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 text-sm">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Planos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free */}
            <div className="rounded-2xl border border-green-100 bg-white p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Grátis</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-slate-900">Grátis</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["1 recibo/mês", "Com branding Alternative Down", "Download em PDF", "Sem cadastro obrigatório"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="block text-center bg-green-50 text-green-700 font-semibold px-6 py-3 rounded-xl hover:bg-green-100 transition">
                Começar grátis
              </Link>
            </div>
            {/* Pro */}
            <div className="rounded-2xl border border-green-300 bg-white shadow-lg p-8">
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 block">
                Mais popular
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Pro</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-slate-900">R$ 9,90</span>
                <span className="text-slate-500 text-sm">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["Recibos ilimitados", "Sem branding — sua marca nos recibos", "Export em PDF", "Histórico completo", "Novos modelos a cada atualização"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/checkout?plan=pro" className="block text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition">
                Assinar Pro
              </Link>
            </div>
          </div>
          <p className="text-center text-slate-400 text-sm mt-6">
            Cancele quando quiser. Sem taxa de cancelamento.
          </p>
        </section>

        {/* CTA Final */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Comece a emitir recibos profissionais agora
          </h2>
          <p className="text-slate-500 mb-8 text-sm">2 minutos. Modelos prontos. PDF imediato.</p>
          <Link href="/signup" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition text-lg inline-block">
            Emitir Meu Primeiro Recibo Grátis →
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Recibo Express — Alternative Down
        </div>
      </footer>
    </div>
  );
}

export const metadata = {
  title: "Recibo Profissional Grátis | Em 2 Minutos | Alternative Down",
  description: "Gere recibos profissionais em 2 minutos. Modelos prontos, PDF imediato, válido para qualquer situação. Comece grátis.",
};
