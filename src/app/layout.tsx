import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ClientToaster from "@/components/ClientToaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recibo Express — Gere recibos profissionais em segundos",
  description: "Gere recibos profissionais, detalhados e prontos para impressão em segundos. Para prestadores de serviço, locadores, profissionais liberais e muito mais.",
  alternates: {
    canonical: "https://recibo.alternativedown.com.br",
  },
  openGraph: {
    title: "Recibo Express — Recibos profissionais em 2 minutos, grátis",
    description: "O autônomo brasileiro merece um recibo bonito, válido e profissional — sem Word, sem complicação.",
    url: "https://recibo.alternativedown.com.br",
    siteName: "Recibo Express",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Recibo Express" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recibo Express — Recibos profissionais em 2 minutos, grátis",
    description: "Recibo bonito, válido e profissional — sem Word, sem complicação.",
  },
  robots: { index: true, follow: true },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Recibo Express",
      description: "Gere recibos profissionais, detalhados e prontos para impressão em segundos. Para prestadores de serviço, locadores, profissionais liberais.",
      url: "https://recibo.alternativedown.com.br",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
        description: "Grátis — 1 recibo/mês sem cadastro",
      },
      provider: {
        "@type": "Organization",
        name: "Alternative Down",
        url: "https://alternativedown.com.br",
      },
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Recibo Express",
    description: "Gere recibos profissionais, detalhados e prontos para impressão em segundos. Para prestadores de serviço, locadores, profissionais liberais.",
    url: "https://recibo.alternativedown.com.br",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      description: "Grátis — 3 recibos/mês sem pagar nada",
    },
    provider: {
      "@type": "Organization",
      name: "Alternative Down",
      url: "https://alternativedown.com.br",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O recibo é válido?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Um recibo com os dados das partes, valor, data e assinatura tem valor fiscal para fins de comprovação de pagamento entre pessoas físicas ou jurídicas.",
        },
      },
      {
        "@type": "Question",
        name: "É gratuito?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Você pode emitir até 3 recibos por mês sem pagar nada. Acima disso, escolha entre o plano Individual (R$ 19/mês, até 30 recibos) ou o plano Ilimitado (R$ 49/mês, recibos sem limite).",
        },
      },
      {
        "@type": "Question",
        name: "Preciso de CNPJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não necessariamente. O recibo aceita CPF do prestador — perfeito para autônomos e freelancers.",
        },
      },
      {
        "@type": "Question",
        name: "Como envio para o cliente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Você baixa o PDF e envia por WhatsApp, e-mail ou qualquer meio que preferir.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a diferença entre recibo e Nota Fiscal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O recibo é um comprovante de pagamento que você emite quando recebe dinheiro. A Nota Fiscal é um documento fiscal emitido para o governo. Para autônomos informais, o recibo costuma ser suficiente.",
        },
      },
    ],
  };

  return (
    <html lang="pt-BR" className={`${geistSans.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <ClientToaster />
      </body>
    </html>
  );
}
