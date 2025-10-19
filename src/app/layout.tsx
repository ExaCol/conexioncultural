/*
Developed by Tomás Vera & Felipe Triviño
Version 1.0
Layout Component
*/

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const viewport = { width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  title: "Conexión Cultural",
  description: "Plataforma para la promoción y difusión de la cultura local de Gualanday",
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
        {children}
      </body>
    </html>
  );
}
