'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from './Reveal';

export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  compact,
  children,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, reduced ? 1.04 : 1.16]);

  return (
    <section
      ref={ref}
      className={`relative flex items-end overflow-hidden bg-surface ${
        compact ? 'h-[46vh] min-h-[360px]' : 'h-[62vh] min-h-[440px] max-h-[640px]'
      }`}
    >
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1420]/90 via-[#0b1420]/45 to-[#0b1420]/10" />
      <div aria-hidden className="mesh-accent absolute inset-0 mix-blend-screen opacity-70" />
      <div className="grain-overlay absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8 sm:pb-20">
        <Reveal>
          {eyebrow && (
            <p className="eyebrow mb-4 text-[19.5px] font-semibold uppercase text-accent-soft">{eyebrow}</p>
          )}
          <h1 className="display text-balance max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)] font-semibold text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="subhead mt-6 max-w-xl text-[17px] text-white/75 sm:text-[19px]">{subtitle}</p>
          )}
          {children}
        </Reveal>
      </div>

      {!compact && (
        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-6 w-6 animate-scrollcue text-white/50"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path d="M12 4v14M6 12l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </section>
  );
}
