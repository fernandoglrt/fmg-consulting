'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const VARIANTS = {
  primary: 'bg-accent text-white hover:bg-accent-deep',
  white: 'bg-white text-ink',
  ink: 'bg-ink text-white hover:bg-accent',
  'outline-dark': 'border border-white/35 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15',
  'outline-light': 'border border-line text-ink hover:border-accent hover:text-accent',
} as const;

export function Button({
  href,
  children,
  variant = 'primary',
  external,
  arrow = true,
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  external?: boolean;
  arrow?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const MotionLink = motion(Link);

  const classes = `group relative isolate inline-flex items-center overflow-hidden rounded-full px-7 py-3.5 text-[15px] font-medium transition-colors duration-300 ${VARIANTS[variant]} ${className}`;

  const inner = (
    <>
      {!reduced && (
        <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
        </span>
      )}
      <span className="relative flex items-center gap-2">
        {children}
        {arrow && (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        )}
      </span>
    </>
  );

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileTap={reduced ? undefined : { scale: 0.97 }}
        transition={{ type: 'spring', damping: 22, stiffness: 400 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <MotionLink
      href={href}
      className={classes}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', damping: 22, stiffness: 400 }}
    >
      {inner}
    </MotionLink>
  );
}
