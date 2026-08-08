'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Button } from './Button';

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string | null; children?: NavChild[] };

const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre', children: [{ label: 'Clientes', href: '/clientes' }] },
  { label: 'Serviços', href: '/servicos' },
  {
    label: 'Materiais',
    href: null,
    children: [
      { label: 'LGPD', href: '/lgpd' },
      { label: 'Passos LGPD', href: '/passos-lgpd' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];

function Dropdown({ item, active, hovered, onHover }: { item: NavItem; active: boolean; hovered: boolean; onHover: (label: string | null) => void }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  const linkClass = active ? 'text-ink font-medium' : 'text-ink/70';

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setOpen(true);
        onHover(item.label);
      }}
      onMouseLeave={() => {
        setOpen(false);
        onHover(null);
      }}
    >
      {hovered && (
        <motion.span
          layoutId="nav-hover-pill"
          className="absolute -inset-x-3 -inset-y-2 rounded-full bg-tint"
          transition={reduced ? { duration: 0 } : { type: 'spring', damping: 28, stiffness: 340 }}
        />
      )}
      {item.href ? (
        <Link href={item.href} className={`relative text-[15px] transition-colors duration-300 ${linkClass}`}>
          {item.label}
        </Link>
      ) : (
        <button
          className={`relative text-[15px] transition-colors duration-300 ${linkClass}`}
          onClick={() => setOpen((v) => !v)}
        >
          {item.label}
        </button>
      )}
      <AnimatePresence>
        {open && item.children && (
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : -6, scale: reduced ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduced ? 0 : -6, scale: reduced ? 1 : 0.98 }}
            transition={{ type: 'spring', damping: 24, stiffness: 320 }}
            style={{ transformOrigin: 'top left' }}
            className="absolute left-0 top-full pt-3"
          >
            <div className="material-card min-w-[168px] rounded-2xl border border-line p-1.5 shadow-lifted">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block rounded-xl px-3 py-2 text-[14px] text-ink/80 hover:bg-black/[0.04] hover:text-ink"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (item: NavItem) =>
    item.href === pathname || (item.children ?? []).some((c) => c.href === pathname);

  return (
    <header
      className={`material-nav sticky top-0 z-50 transition-shadow ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="FMG Consulting — início">
          <Image src="/images/logo-fmg.png" alt="FMG Consulting" width={140} height={53} priority className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" onMouseLeave={() => setHovered(null)}>
          {NAV.map((item) => (
            <Dropdown
              key={item.label}
              item={item}
              active={isActive(item)}
              hovered={hovered === item.label}
              onHover={setHovered}
            />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contato" variant="primary" className="!px-5 !py-2 !text-[14px]">
            Fale conosco
          </Button>
        </div>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Abrir menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <motion.span
            animate={reduced ? {} : { rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="h-[1.5px] w-6 bg-ink"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            transition={{ duration: 0.15 }}
            className="h-[1.5px] w-6 bg-ink"
          />
          <motion.span
            animate={reduced ? {} : { rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="h-[1.5px] w-6 bg-ink"
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="material-nav flex flex-col gap-1 px-5 py-4">
              {NAV.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-2 py-2.5 text-[16px] ${
                        isActive(item) ? 'font-medium text-ink' : 'text-ink/75'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="block px-2 py-2.5 text-[16px] font-medium text-ink/50">{item.label}</span>
                  )}
                  {item.children && (
                    <div className="ml-3 flex flex-col border-l border-line pl-3">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="rounded-lg px-2 py-2 text-[15px] text-ink/70">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
