import { PressLink } from '@/components/PressLink';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { ClientLogos } from '@/components/ClientLogos';
import { BlogCard } from '@/components/BlogCard';
import { PageHero } from '@/components/PageHero';
import { BlobArt } from '@/components/BlobArt';
import { CountUp } from '@/components/CountUp';
import { getAllPostsMeta } from '@/lib/posts';

const STATS = [
  { value: 38, suffix: '+', label: 'Anos de experiência do sócio diretor', color: 'text-accent' },
  { value: 13, suffix: '', label: 'Empresas atendidas em diferentes setores', color: 'text-coral' },
  { value: 6, suffix: '', label: 'Frentes de atuação integradas', color: 'text-mint' },
  { value: 1, suffix: '', label: 'Gestor dedicado por projeto', color: 'text-accent' },
];

export default function HomePage() {
  const posts = getAllPostsMeta().slice(0, 3);

  return (
    <>
      <PageHero
        image="/images/hero-home.jpg"
        eyebrow="FMG Consulting"
        title="Hub Organizacional"
        subtitle="Soluções completas para o ambiente empresarial. Governança corporativa, planejamento, execução e gestão estratégica com excelência de alta performance."
      >
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/servicos" variant="white">
            Conheça os nossos serviços
          </Button>
          <Button href="/contato" variant="outline-dark" arrow={false}>
            Fale conosco
          </Button>
        </div>
      </PageHero>

      <section className="bg-tint py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-[13px] font-semibold uppercase text-accent">
              Conheça a FMG Consulting
            </p>
            <h2 className="display text-balance mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-ink">
              Inspirar e desenvolver equipes em busca de uma combinação de estratégia e
              execução de alta performance.
            </h2>
            <Button href="/sobre" variant="primary" className="mt-8">
              Saiba mais
            </Button>
          </Reveal>
          <Reveal delay={0.08}>
            <BlobArt />
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-center text-[13px] font-semibold uppercase text-ink/35">
              Empresas que confiam na FMG
            </p>
          </Reveal>
          <div className="mt-10">
            <ClientLogos />
          </div>
        </div>
      </section>

      <section className="bg-tint py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 rounded-[32px] bg-white p-8 shadow-soft sm:p-12 md:grid-cols-4">
              {STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.05}>
                  <div>
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      className={`display block text-[clamp(2rem,4vw,2.75rem)] font-semibold ${stat.color}`}
                    />
                    <p className="mt-1.5 text-[13.5px] leading-snug text-ink/55">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
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
              <h2 className="headline text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-white">
                Precisa de mais informações?
              </h2>
              <p className="subhead mx-auto mt-4 max-w-lg text-[16px] text-white/80">
                Estamos aqui para ajudá-lo. Entre em contato por telefone, e-mail ou redes sociais.
              </p>
              <Button href="/contato" variant="white" className="mt-8 !text-accent">
                Fale com a gente
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {posts.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
          <Reveal>
            <div className="mb-10 flex items-end justify-between">
              <h2 className="headline text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink">
                Últimas publicações
              </h2>
              <PressLink href="/blog" className="text-[14px] font-medium text-accent">
                Ver tudo →
              </PressLink>
            </div>
          </Reveal>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <BlogCard post={post} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
