/*
Developed by EXA
Version 1.0
Layout Component
*/

import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport = { width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  title: "Conexión Cultural",
  description: "Plataforma para la promoción y difusión de la cultura local de Gualanday",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="layout">
        <Header />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
