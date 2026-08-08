'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const LINKS = [
  { href: '/admin', label: 'Posts' },
  { href: '/admin/novo', label: 'Novo post' },
  { href: '/admin/leads', label: 'Mensagens' },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const reduced = useReducedMotion();

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 sm:px-8">
      <header className="flex items-center justify-between py-6">
        <Link href="/admin" className="flex items-center gap-2">
          <Image src="/images/logo-fmg.png" alt="FMG Consulting" width={110} height={41} className="h-7 w-auto" />
          <span className="text-[13px] font-medium text-ink/40">admin</span>
        </Link>
        <motion.button
          onClick={logout}
          whileTap={reduced ? undefined : { scale: 0.96 }}
          className="rounded-full border border-line px-4 py-2 text-[13.5px] font-medium text-ink/70 hover:text-ink"
        >
          Sair
        </motion.button>
      </header>

      <nav className="flex gap-1 border-b border-line">
        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-3 text-[14px] font-medium transition-colors ${
                active ? 'text-ink' : 'text-ink/45 hover:text-ink/70'
              }`}
            >
              {link.label}
              {active && (
                <motion.span
                  layoutId="admin-nav-underline"
                  className="absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-accent"
                  transition={{ type: 'spring', damping: 24, stiffness: 300 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="flex-1 py-10">{children}</div>
    </div>
  );
}
