import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { Accordion } from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'LGPD',
  description:
    'Tudo sobre a Lei Geral de Proteção de Dados (LGPD) e como a FMG Consulting apoia sua empresa na adequação.',
};

const lei = [
  'Estabelece novas diretrizes em relação a como é tratada a segurança das informações de clientes, usuários e funcionários.',
  'Regula o tratamento de dados pessoais sob a ótica da privacidade e da proteção.',
  'Busca um maior controle sobre as informações e prevê uma fiscalização eficaz contra possíveis abusos no uso desses dados.',
];

const eraDigital = [
  'Intensificação do uso de dados',
  'Processamento de informações',
  'Coleta, transmissão e armazenamento',
];

const faq = [
  {
    question: 'Será que se aplica à minha empresa?',
    answer:
      'Sim, muito provavelmente. A LGPD se aplica a qualquer empresa que colete ou trate dados pessoais de clientes, funcionários ou fornecedores — independentemente do porte ou do setor. Poucos negócios ficam de fora dessa exigência.',
  },
  {
    question: 'Por que devo me adequar?',
    answer:
      'Além de ser uma obrigação legal, a adequação reduz o risco de sanções da ANPD, protege a empresa de vazamentos e incidentes de dados, e transmite confiança para clientes e parceiros de negócio.',
  },
  {
    question: 'Será que essa lei vai pegar?',
    answer:
      'Já pegou. A LGPD está em vigor desde 18/09/2020 e a Autoridade Nacional de Proteção de Dados (ANPD) já fiscaliza e aplica sanções — de advertência a multas.',
  },
  {
    question: 'Do que se trata a LGPD, resumidamente?',
    answer:
      'É a Lei nº 13.709/2018, que regula como empresas coletam, tratam, armazenam e compartilham dados pessoais, sob a ótica da privacidade e da proteção dos titulares desses dados.',
  },
];

export default function LgpdPage() {
  return (
    <>
      <PageHero
        image="/images/hero-servicos.jpg"
        compact
        eyebrow="Materiais"
        title="A LGPD"
        subtitle="Sim, a LGPD está valendo. Entenda o que ela significa para o seu negócio e como a FMG te ajuda a se adequar."
      />

      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <p className="display text-balance text-[clamp(1.4rem,2.8vw,1.9rem)] font-medium leading-snug text-ink">
            Desde 18/09/2020 a LGPD está em vigor.
          </p>
          <p className="body-copy mt-6 text-[16.5px] text-ink/60">
            Após 2 anos de vacância — período em que as organizações puderam se preparar — a Lei
            Geral de Proteção de Dados entrou definitivamente em vigor no Brasil. A pergunta que
            fica é simples: a sua empresa já se adequou?
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line bg-tint py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-[13px] font-semibold uppercase text-accent">
              Do que se trata a LGPD?
            </p>
            <h2 className="headline mt-4 max-w-2xl text-[clamp(1.4rem,3vw,2rem)] font-semibold text-ink">
              A Lei nº 13.709/2018
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {lei.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-lifted">
                  <span className="display text-[26px] font-semibold text-accent/25">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="body-copy mt-3 text-[15px] text-ink/65">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-[13px] font-semibold uppercase text-accent">
                LGPD e a era digital
              </p>
              <h2 className="headline mt-4 text-[clamp(1.4rem,3vw,2rem)] font-semibold text-ink">
                Qual a relação?
              </h2>
              <p className="body-copy mt-4 text-[15.5px] text-ink/60">
                O crescimento do ambiente digital intensificou a forma como empresas lidam com
                dados pessoais em todas as etapas — e é exatamente aí que a LGPD age.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="flex flex-col gap-4">
                {eraDigital.map((item) => (
                  <li key={item} className="flex items-center gap-4 rounded-2xl bg-tint p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-[13px] font-semibold text-white">
                      ✓
                    </span>
                    <span className="text-[15px] font-medium text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-tint py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow text-[13px] font-semibold uppercase text-accent">
              Como a FMG Consulting pode te apoiar
            </p>
            <p className="display text-balance mx-auto mt-5 max-w-2xl text-[clamp(1.3rem,2.6vw,1.75rem)] font-medium text-ink">
              Realizamos um diagnóstico preliminar da situação na sua empresa, a fim de propor
              soluções de adequação e conformidade.
            </p>
            <p className="body-copy mx-auto mt-5 max-w-xl text-[15.5px] text-ink/60">
              Por apresentar uma legislação abrangente e que pode impactar seu negócio,
              recomendamos que seja executado um plano de ação que apoie a completa adequação à
              legislação.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-center text-[13px] font-semibold uppercase text-accent">
              Perguntas frequentes
            </p>
            <h2 className="headline mt-4 text-center text-[clamp(1.4rem,3vw,2rem)] font-semibold text-ink">
              Ainda com dúvidas?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-10">
              <Accordion items={faq} />
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
                Quer saber por onde começar?
              </h2>
              <p className="subhead mx-auto mt-4 max-w-lg text-[16px] text-white/80">
                Conheça os 7 passos que a FMG utiliza para conduzir a adequação à LGPD de forma
                ágil e eficaz.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/passos-lgpd" variant="white" className="!text-accent">
                  Ver os 7 passos
                </Button>
                <Button href="/contato" variant="outline-dark" arrow={false}>
                  Falar com um consultor
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
