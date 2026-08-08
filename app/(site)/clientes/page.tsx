import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { ClientLogos } from '@/components/ClientLogos';

export const metadata: Metadata = {
  title: 'Clientes',
  description: 'Empresas que confiam na consultoria organizacional da FMG Consulting.',
};

export default function ClientesPage() {
  return (
    <>
      <PageHero
        image="/images/hero-servicos.jpg"
        compact
        eyebrow="Confiança"
        title="Clientes"
        subtitle="Empresas de diferentes segmentos que já contaram com a consultoria da FMG."
      />

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <ClientLogos marquee={false} />
        </Reveal>
      </section>
    </>
  );
}
