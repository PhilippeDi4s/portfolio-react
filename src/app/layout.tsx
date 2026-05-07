import type { Metadata } from "next";
import { Manrope, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Container } from "../components/layout/Container";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  fallback: ["Segoe UI", "Arial", "sans-serif"],
  variable: "--font-body",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["Impact", "Arial", "sans-serif"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Philippe Dias",
    default: "Philippe Dias | Desenvolvedor Web",
  },
  description:
    "Portfólio de Philippe Dias, desenvolvedor Full Stack especializado em  React, Next.js, TypeScript e interfaces modernas. Projetos web, aplicações fullstack e estudos de desenvolvimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${manrope.variable} ${bebasNeue.variable}`}>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
