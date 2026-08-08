import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Passos LGPD',
  description: 'Os 7 passos da FMG Consulting para adequação à Lei Geral de Proteção de Dados.',
};

const passos = [
  {
    n: '01',
    title: 'Diagnóstico',
    text: 'Mapeamento dos dados tratados na instituição. Identificação dos fluxos de informação da empresa.',
  },
  {
    n: '02',
    title: 'Avaliação dos riscos',
    text: 'Análise dos dados armazenados e da forma como são manipulados, e avaliação dos formulários de captação de dados — nos meios físico, virtual, online e offline.',
  },
  {
    n: '03',
    title: 'Estratégia de adequação',
    text: 'Adoção de medidas de segurança e privacidade em compliance com a LGPD, criação de política de privacidade e, quando necessário, relatório de impacto à proteção de dados. Diretrizes sobre gestão de consentimento, dados e fluxo de dados.',
  },
  {
    n: '04',
    title: 'Plano de ação',
    text: 'Estruturação de um plano de ação que contemple os fatos apurados nos passos anteriores — a base para a implementação.',
  },
  {
    n: '05',
    title: 'Implementação',
    text: 'Execução das ações propostas no plano, além da adição de ações posteriores conforme necessário.',
  },
  {
    n: '06',
    title: 'Acompanhamento',
    text: 'Monitoramento dos indicadores de sucesso e do processo de adequação como um todo.',
  },
  {
    n: '07',
    title: 'Diagnóstico conclusivo',
    text: 'Apresentação do plano de adequação e do diagnóstico conclusivo — documento com todo o processo de adequação e o mapa de gestão dos processos da empresa.',
  },
];

export default function PassosLgpdPage() {
  return (
    <>
      <PageHero
        image="/images/hero-servicos.jpg"
        compact
        eyebrow="Metodologia"
        title="7 Passos para adequação à LGPD"
        subtitle="O passo a passo que a FMG Consulting utiliza — em parceria com a Qlic — para conduzir empresas à conformidade com a Lei Geral de Proteção de Dados."
      />

      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <p className="body-copy text-[16.5px] text-ink/60">
            Antes do primeiro passo, alinhamos o entendimento com a sua equipe: apresentamos o
            processo de implementação, geramos conscientização sobre a importância da lei e seus
            conceitos, e apoiamos a criação de um Comitê de Segurança da Informação. A partir
            daí, seguimos estes 7 passos.
          </p>
        </Reveal>

        <div className="relative mt-14 flex flex-col">
          <div aria-hidden className="absolute bottom-8 left-[19px] top-8 hidden w-px bg-line sm:block" />
          {passos.map((passo, i) => (
            <Reveal key={passo.n} delay={i * 0.05}>
              <div className="group relative flex gap-6 py-6">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white font-mono text-[13px] font-semibold text-accent shadow-soft transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  {passo.n}
                </span>
                <div className="pb-2">
                  <h3 className="headline text-[18px] font-semibold text-ink">{passo.title}</h3>
                  <p className="body-copy mt-2 text-[15px] text-ink/60">{passo.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 text-center sm:px-8">
        <Reveal>
          <Button href="/contato" variant="primary">
            Clique aqui para entrar em contato
          </Button>
        </Reveal>
      </section>
    </>
  );
}
