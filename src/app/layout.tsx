import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recibo Express — Gere recibos profissionais em segundos",
  description: "Gere recibos profissionais, detalhados e prontos para impressão em segundos. Para prestadores de serviço, locadores, profissionais liberais e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 antialiased">{children}</body>
    </html>
  );
}