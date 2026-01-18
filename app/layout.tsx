import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KODXO - L'Ordre par l'Intelligence | Automatisation & IA au Cameroun",
  description: "Transformez la complexité opérationnelle en avantage compétitif. KODXO - Agence d'architecture logicielle, ERP Odoo et automatisation IA basée à Yaoundé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
