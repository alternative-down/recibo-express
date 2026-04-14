import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientToaster from "@/components/ClientToaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recibo Express — Gere recibos profissionais em segundos",
  description: "Gere recibos profissionais, detalhados e prontos para impressão em segundos. Para prestadores de serviço, locadores, profissionais liberais e muito mais.",
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
  return (
    <html lang="pt-BR" className={`${geistSans.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 antialiased">
        {children}
        <ClientToaster />
      </body>
    </html>
  );
}