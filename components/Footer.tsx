import Link from 'next/link';
import Image from 'next/image';
import { LinkedinIcon, InstagramIcon, YoutubeIcon } from '@/components/icons/SocialIcons';

const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fl%C3%A1vio-goulart-2a345ab7/', Icon: LinkedinIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/consultoriafm/', Icon: InstagramIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCnX7dpO6_dklnQaRP2bZEpA', Icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-tint">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image src="/images/logo-fmg.png" alt="FMG Consulting" width={140} height={53} className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-ink/55">
            Consultoria organizacional de alta performance — estratégia, execução, pessoas e
            governança para o seu negócio.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {SOCIAL.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/50 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-[12px] font-semibold uppercase text-ink/35">Navegação</p>
          <ul className="mt-4 space-y-2.5 text-[14px] text-ink/65">
            <li><Link href="/sobre" className="transition-colors hover:text-accent">Sobre</Link></li>
            <li><Link href="/servicos" className="transition-colors hover:text-accent">Serviços</Link></li>
            <li><Link href="/clientes" className="transition-colors hover:text-accent">Clientes</Link></li>
            <li><Link href="/blog" className="transition-colors hover:text-accent">Blog</Link></li>
            <li><Link href="/contato" className="transition-colors hover:text-accent">Contato</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[12px] font-semibold uppercase text-ink/35">Contato</p>
          <ul className="mt-4 space-y-2.5 text-[14px] text-ink/65">
            <li><a href="tel:+5551981898705" className="transition-colors hover:text-accent">+55 (51) 98189-8705</a></li>
            <li><a href="mailto:contato@fmgcons.com.br" className="transition-colors hover:text-accent">contato@fmgcons.com.br</a></li>
            <li><Link href="/politica-de-privacidade" className="transition-colors hover:text-accent">Política de privacidade</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-[12.5px] text-ink/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} FMG Consulting. Todos os direitos reservados.</p>
          <p>Porto Alegre, RS — Brasil</p>
        </div>
      </div>
    </footer>
  );
}
