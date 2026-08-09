import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { CopyButton } from '@/components/CopyButton';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com a FMG Consulting por telefone, WhatsApp, e-mail ou pelo formulário.',
};

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6.6 10.8c1.4 2.7 3.7 5 6.4 6.4l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z" />
    </svg>
  );
}
function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3.5a8.5 8.5 0 0 0-7.35 12.75L3.5 20.5l4.4-1.13A8.5 8.5 0 1 0 12 3.5Z" />
      <path d="M8.7 8.4c.15-.35.3-.36.5-.37h.4c.13 0 .3-.02.45.36.17.42.58 1.45.63 1.55.05.1.08.23.02.37-.06.14-.1.22-.2.34-.1.12-.2.27-.3.36-.1.1-.2.2-.09.4.12.2.53.9 1.15 1.46.79.72 1.44.94 1.65 1.05.2.1.32.08.44-.05.13-.13.53-.6.66-.81.13-.2.27-.17.44-.1s1.15.55 1.35.65c.2.1.33.15.38.24.05.09.05.5-.12.98-.16.48-.96.9-1.34.96-.34.06-.77.08-1.24-.08a12 12 0 0 1-1.3-.48c-2.15-.93-3.55-3.08-3.66-3.23-.1-.14-.87-1.16-.87-2.21 0-1.05.55-1.56.74-1.77Z" />
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="2" />
      <path d="m4 6.5 8 6.25 8-6.25" />
    </svg>
  );
}
function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3.25 19.5 6v6c0 5-3.2 8.4-7.5 9.75C7.7 20.4 4.5 17 4.5 12V6L12 3.25Z" />
      <path d="m9 12 2.25 2.25L15.5 9.5" />
    </svg>
  );
}

const CONTACTS = [
  {
    label: 'Telefone / WhatsApp',
    value: '+55 (51) 98189-8705',
    copyValue: '+55 (51) 98189-8705',
    href: 'tel:+5551981898705',
    Icon: PhoneIcon,
  },
  {
    label: 'WhatsApp',
    value: '+55 (51) 98189-8705',
    copyValue: '+55 (51) 98189-8705',
    href: 'https://wa.me/5551981898705',
    Icon: WhatsappIcon,
    external: true,
  },
  {
    label: 'E-mail',
    value: 'contato@fmgcons.com.br',
    copyValue: 'contato@fmgcons.com.br',
    href: 'mailto:contato@fmgcons.com.br',
    Icon: MailIcon,
  },
  {
    label: 'DPO',
    value: 'dpo@fmgcons.com',
    copyValue: 'dpo@fmgcons.com',
    href: 'mailto:dpo@fmgcons.com',
    Icon: ShieldIcon,
  },
];

const CANAIS = [
  { label: 'LinkedIn — Flávio Goulart', href: 'https://www.linkedin.com/in/fl%C3%A1vio-goulart-2a345ab7/' },
  { label: 'Instagram — Flávio Goulart', href: 'https://www.instagram.com/flaviofmg/' },
  { label: 'Instagram — FMG Consulting', href: 'https://www.instagram.com/consultoriafm/' },
  { label: 'YouTube — FMG Consulting', href: 'https://www.youtube.com/channel/UCnX7dpO6_dklnQaRP2bZEpA' },
  { label: 'Plataforma Unio Sebrae', href: 'https://plataforma.uniosebrae.com.br/p/fmg-consulting/' },
  { label: 'WhatsApp Business', href: 'https://wa.me/5551981898705' },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        image="/images/hero-contato.jpg"
        compact
        eyebrow="Vamos conversar"
        title="Contato"
        subtitle="Estamos aqui para ajudá-lo. Entre em contato por telefone, e-mail ou pelo formulário abaixo."
      />

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 sm:py-28 md:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-10">
          <Reveal>
            <div>
              <p className="eyebrow text-[13px] font-semibold uppercase text-accent">Fale conosco</p>
              <ul className="mt-6 flex flex-col gap-3">
                {CONTACTS.map(({ label, value, copyValue, href, Icon, external }) => (
                  <li key={label}>
                    <div className="group relative flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-soft transition-shadow duration-300 hover:shadow-lifted">
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        aria-label={`${label}: ${value}`}
                        className="absolute inset-0 rounded-2xl"
                      />
                      <span className="pointer-events-none flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-deep text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="pointer-events-none">
                        <span className="block text-[12px] uppercase tracking-wide text-ink/40">{label}</span>
                        <span className="block text-[15px] font-medium text-ink transition-colors group-hover:text-accent">
                          {value}
                        </span>
                      </span>
                      <div className="relative z-10 ml-auto">
                        <CopyButton value={copyValue} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div>
              <p className="eyebrow text-[13px] font-semibold uppercase text-accent">Canais &amp; mídias FMG</p>
              <div className="mt-6 overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
                {CANAIS.map((item) => (
                  <a
                    key={item.href + item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-line px-5 py-4 text-[14.5px] font-medium text-ink transition-colors last:border-b-0 hover:bg-tint hover:text-accent"
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className="text-ink/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                    >
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.06}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
