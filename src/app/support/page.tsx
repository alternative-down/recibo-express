import Link from "next/link";

export const metadata = { title: "Suporte - Recibo Express" };

export default function SupportPage() {
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
            <Link href="/pricing" className="text-slate-600 hover:text-green-600 text-sm font-medium">Preços</Link>
            <Link href="/login" className="text-slate-600 hover:text-green-600 text-sm font-medium">Entrar</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Central de Suporte</h1>
        <p className="text-slate-600 mb-10">Tire suas dúvidas ou entre em contato conosco.</p>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-8 mb-8">
          <h2 className="font-bold text-slate-900 mb-4">Dúvidas frequentes</h2>
          <div className="space-y-4 text-sm text-slate-600">
            {[
              { q: "Como funciona o pagamento?", a: "O pagamento é processado via PIX ou cartão pelo Asaas. Você recebe o recibo por email após a confirmação." },
              { q: "Posso emitir nota fiscal?", a: "O Recibo Express gera recibos profissionais. Para nota fiscal, consulte a legislação vigente." },
              { q: "Meu dado está seguro?", a: "Sim. Utilizamos criptografia e não compartilhamos seus dados com terceiros." },
              { q: "Como solicito reembolso?", a: "Envie um email para suporte@alternativedown.com.br com seu comprovante de pagamento." },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-green-50 pb-4 last:border-0 last:pb-0">
                <p className="font-medium text-slate-900 mb-1">{q}</p>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl border border-green-100 p-8 text-center">
          <h2 className="font-bold text-slate-900 mb-2">Precisa de ajuda?</h2>
          <p className="text-slate-600 mb-4">Envie um email para nosso time.</p>
          <a href="mailto:suporte@alternativedown.com.br"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90">
            suporte@alternativedown.com.br
          </a>
        </div>
      </main>
    </div>
  );
}