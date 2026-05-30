import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SETE TV News — TV Digital, Portal, Podcast e Redes Sociais",
  description: "A plataforma de comunicação digital que conecta o Piauí com credibilidade, ética e responsabilidade social.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ overflowX:"hidden" }}>{children}</body>
    </html>
  );
}
