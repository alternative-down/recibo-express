import Link from "next/link";
import { TEMPLATES } from "@/lib/templates";
import { PLANS } from "@/lib/plans";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center text-white text-lg font-bold">R</div>
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
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Recibo Profissional em 2 Minutos. Grátis.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Sem Word. Sem complicação. Escolha o modelo, preencha os dados e baixe um PDF profissional — aceito por clientes e empresas.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/signup" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition text-lg">Emitir Meu Primeiro Recibo Grátis →
            </Link>
            <Link href="#pricing" className="text-slate-600 hover:text-green-600 font-medium px-4 py-4 text-lg">
              Ver planos
            </Link>
          </div>
          <p className="text-sm text-slate-500 mt-4">Sem cadastro. Sem complicação. Leva 2 minutos.</p>
          {/* Social proof */}
          <p className="mt-6 text-sm text-green-700 font-medium">
            Milhares de autônomos já emitiram seus recibos com o Alternative Down.
          </p>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="bg-white border-t border-green-100 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Como funciona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Preencha', desc: 'Nome, valor, serviço. Em 2 minutos.' },
                { step: '2', title: 'Personalize', desc: 'Escolha o modelo que combina com você.' },
                { step: '3', title: 'Baixe', desc: 'PDF pronto para imprimir ou enviar.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 font-bold text-xl flex items-center justify-center mx-auto mb-4">{step}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                  <p className="text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Tudo que você precisa em um recibo profissional</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📄', title: 'Modelos prontos', desc: '5 modelos profissionais: Clássico, Moderno, Simples, Formal, Branco' },
              { icon: '📋', title: 'Dados completos', desc: 'CNPJ, CPF, endereço, descrição do serviço, valor por extenso' },
              { icon: '📥', title: 'PDF Profissional', desc: 'Download imediato — formato A4, legível, aceito por clientes' },
              { icon: '✍️', title: 'Assinatura', desc: 'Espaço para assinatura à mão ou digital' },
              { icon: '📂', title: 'Salvar histórico', desc: 'Acesse todos os recibos que você já emitiu' },
              { icon: '📱', title: 'Compartilhar', desc: 'Envie por WhatsApp, e-mail ou link direto' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
                <span className="text-2xl mb-3 block">{icon}</span>
                <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who is it for */}
        <section className="bg-white border-t border-green-100 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Para quem é o Recibo Express?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '💼', title: 'Autônomo / Prestador de serviços', desc: 'Emissor de NF-e não vale a pena pro seu caso? O recibo cobre o necessário.' },
                { icon: '🎨', title: 'Freelancer', desc: 'Cliente pediu "algo formal"? Manda o PDF em 2 minutos.' },
                { icon: '🏪', title: 'MEI', desc: 'Recibo é separado da Nota Fiscal. Faça os dois quando precisar.' },
                { icon: '⚕️', title: 'Profissional liberal', desc: 'Dentista, advogado, contador — qualquer profissional liberal emite recibo.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl border border-green-100">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                    <p className="text-sm text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Models preview */}
        <section id="modelos" className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Modelos disponíveis</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {TEMPLATES.map((template) => (
              <div key={template.id} className="bg-white rounded-xl shadow-sm border border-green-100 p-5 text-center hover:shadow-md hover:border-green-200 transition">
                <span className="text-3xl">{template.icon}</span>
                <h3 className="font-semibold text-slate-900 mt-2 text-sm">{template.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{template.description}</p>
                <Link href={`/app/generate?template=${template.id}`} className="mt-3 inline-block text-sm font-medium text-green-600 hover:text-green-700">
                  Usar →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white border-t border-green-100 py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Dúvidas frequentes</h2>
            <div className="space-y-6">
              {[
                { q: 'O recibo é válido?', a: 'Sim. Um recibo com os dados das partes, valor, data e assinatura tem valor fiscal para fins de comprovação de pagamento entre pessoas físicas ou jurídicas.' },
                { q: 'É gratuito?', a: 'Sim. Você pode emitir até 3 recibos por mês sem pagar nada. Acima disso, escolha entre o plano Individual (R$ 19/mês, até 30 recibos) ou o plano Ilimitado (R$ 49/mês, recibos sem limite).' },
                { q: 'Preciso de CNPJ?', a: 'Não necessariamente. O recibo aceita CPF do prestador — perfeito para autônomos e freelancers.' },
                { q: 'Como envio para o cliente?', a: 'Você baixa o PDF e envia por WhatsApp, e-mail ou qualquer meio que preferir.' },
                { q: 'Qual a diferença entre recibo e Nota Fiscal?', a: 'O recibo é um comprovante de pagamento que você emite quando recebe dinheiro. A Nota Fiscal é um documento fiscal emitido para o governo. Para autônomos informais, o recibo costuma ser suficiente.' },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-green-100 pb-6 last:border-0">
                  <p className="font-semibold text-slate-900 mb-2">{q}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Planos simples, sem surpresa</h2>
          <p className="text-center text-slate-600 mb-12">Cancele quando quiser. Sem taxa de cancelamento.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PLANS.map((plan) => (
              <div key={plan.id} className={`rounded-2xl p-8 ${plan.recommended ? 'bg-gradient-to-br from-green-600 to-emerald-500 text-white shadow-lg' : 'bg-white border border-green-100 shadow-sm'}`}>
                {plan.recommended && <span className="text-xs font-bold text-green-100 bg-white/20 px-3 py-1 rounded-full">Recomendado</span>}
                <h3 className={`text-xl font-bold mt-3 mb-1 ${plan.recommended ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <div className="mb-4">
                  <span className={`text-3xl font-bold ${plan.recommended ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price === 0 ? 'Grátis' : `R$ ${plan.price}`}
                  </span>
                  {plan.price > 0 && <span className={`text-sm ${plan.recommended ? 'text-green-100' : 'text-slate-500'}`}>/mês</span>}
                </div>
                {plan.receiptsPerMonth === Infinity ? (
                  <p className={`text-sm mb-4 ${plan.recommended ? 'text-green-100' : 'text-slate-500'}`}>Recibos ilimitados</p>
                ) : plan.receiptsPerMonth > 0 ? (
                  <p className={`text-sm mb-4 ${plan.recommended ? 'text-green-100' : 'text-slate-500'}`}>Até {plan.receiptsPerMonth} recibos/mês</p>
                ) : null}
                <ul className="space-y-2 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className={`text-sm flex items-start gap-2 ${plan.recommended ? 'text-green-50' : 'text-slate-600'}`}>
                      <span>✅</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href={plan.id === "free" ? "/signup" : plan.id === "individual" ? "/checkout?plan=individual" : "/checkout?plan=ilimitado"} className={`block text-center py-3 rounded-xl font-semibold transition ${plan.recommended ? 'bg-white text-green-600 hover:opacity-90' : 'bg-green-600 text-white hover:opacity-90'}`}>
                  {plan.price === 0 ? "Começar grátis →" : "Assinar →"}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-green-600 to-emerald-500 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Comece a emitir recibos profissionais agora</h2>
          <Link href="/signup" className="inline-block bg-white text-green-600 font-bold px-8 py-4 rounded-xl hover:opacity-90 text-lg mt-4">Emitir Meu Primeiro Recibo Grátis →
          </Link>
          <p className="text-green-100 mt-4 text-sm">Sem cadastro. Sem complicação. Leva 2 minutos.</p>
        </section>

        {/* Footer */}
        <footer className="border-t border-green-100 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">© 2026 Recibo Express · Alternative Down</p>
            <div className="flex items-center gap-6">
              <Link href="/support" className="text-sm text-slate-500 hover:text-green-600">Suporte</Link>
              <Link href="#pricing" className="text-sm text-slate-500 hover:text-green-600">Preços</Link>
              <Link href="#modelos" className="text-sm text-slate-500 hover:text-green-600">Modelos</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}