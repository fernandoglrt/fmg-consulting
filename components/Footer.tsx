import Link from 'next/link';
import Image from 'next/image';

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
            <li><a href="tel:+555134302673" className="transition-colors hover:text-accent">(51) 3430-2673</a></li>
            <li><a href="mailto:fmgcons@fmgcons.com" className="transition-colors hover:text-accent">fmgcons@fmgcons.com</a></li>
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
