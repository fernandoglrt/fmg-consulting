import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://fmgcons.com.br'),
  title: {
    default: 'FMG Consulting | Consultoria Organizacional',
    template: '%s | FMG Consulting',
  },
  description:
    'Consultoria organizacional de Alta Performance. Administração Estratégica, Execução, Projetos, Gestão de Pessoas, Finanças e Modelagem Organizacional.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'FMG Consulting',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
