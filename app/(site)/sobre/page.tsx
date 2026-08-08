import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'A FMG Consulting atua no segmento de consultoria organizacional e de desenvolvimento, com equipe multidisciplinar por projeto.',
};

const INSTITUICOES = [
  'Banco De Lage Landen',
  'Banco Malcon',
  'Malcon Financeira',
  'Banco Augusta',
  'Banco Ficrisa',
  'Ficrisa D.T.V.M.',
  'Banco Iochpe de Investimentos',
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        image="/images/hero-sobre.jpg"
        compact
        eyebrow="Quem somos"
        title="Sobre a FMG"
        subtitle="Estratégia e execução de alta performance, com um time multidisciplinar dedicado a cada projeto."
      />

      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <p className="display text-balance text-[clamp(1.5rem,3.2vw,2.1rem)] font-medium leading-snug text-ink">
            A FMG Consulting atua no segmento de consultoria organizacional e de desenvolvimento,
            com consultores parceiros formando uma equipe multidisciplinar por projeto.
          </p>
          <p className="body-copy mt-6 text-[17px] text-ink/60">
            Cada cliente recebe um gestor designado — todos os profissionais agregam ampla
            experiência nas suas áreas de competência. Inspiramos e desenvolvemos equipes em
            busca de uma combinação de estratégia e execução de alta performance, utilizando
            técnicas modernas e de impacto no resultado.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line bg-tint py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-[13px] font-semibold uppercase text-accent">Equipe</p>
            <div className="mt-8 overflow-hidden rounded-[32px] bg-white shadow-soft">
              <div className="flex flex-col gap-8 p-8 sm:flex-row sm:items-start sm:p-10">
                <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-[24px] ring-1 ring-line">
                  <Image
                    src="/images/flavio-goulart.png"
                    alt="Flávio de Moura Goulart"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="headline text-2xl font-semibold text-ink">Flávio de Moura Goulart</h2>
                  <p className="mt-1 text-[14px] font-medium uppercase tracking-wide text-accent">
                    Sócio Diretor
                  </p>
                  <p className="body-copy mt-4 text-[15.5px] text-ink/60">
                    Profissional com mais de 38 anos de experiência em empresas nacionais e
                    multinacionais do sistema financeiro. Experiência nas áreas Administrativa e
                    Financeira, envolvendo estruturação e desenho de estruturas organizacionais,
                    elaboração e acompanhamento de planejamento estratégico, elaboração de
                    orçamento, planejamento, acompanhamento e controle de projetos, e gestão da
                    operação de seguros.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {INSTITUICOES.map((nome) => (
                      <span
                        key={nome}
                        className="rounded-full bg-tint px-3 py-1.5 text-[12.5px] text-ink/55"
                      >
                        {nome}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-accent px-8 py-16 text-center sm:px-16 sm:py-20">
            <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
            <div aria-hidden className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" />
            <div className="relative">
              <h2 className="headline text-balance text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-white">
                Conheça quem já conta com a FMG
              </h2>
              <Button href="/clientes" variant="white" className="mt-8 !text-accent">
                Ver clientes atendidos
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
