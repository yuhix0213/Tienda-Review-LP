import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tienda Review | Confianza que se construye",
    template: "%s | Tienda Review",
  },

  description:
    "Tienda Review ayuda a convertir experiencias reales en señales visibles de confianza, manteniendo siempre el control humano.",

  icons: {
    icon: "/brand/tienda-review-icon-square.svg",
    shortcut: "/brand/tienda-review-icon-square.svg",
    apple: "/brand/tienda-review-icon-square.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
