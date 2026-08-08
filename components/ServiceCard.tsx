'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function ServiceCard({
  icon,
  title,
  items,
  index,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
  index?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ type: 'spring', damping: 20, stiffness: 260 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-lifted"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/[0.06] transition-transform duration-500 group-hover:scale-125"
      />
      {typeof index === 'number' && (
        <span className="absolute right-7 top-7 font-mono text-[12px] text-ink/25">
          {String(index + 1).padStart(2, '0')}
        </span>
      )}
      <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-deep text-white shadow-[0_8px_20px_-6px_rgba(26,134,201,0.55)]">
        <div className="h-6 w-6">{icon}</div>
      </div>
      <h3 className="headline text-[19px] font-semibold text-ink">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-[14.5px] leading-relaxed text-ink/60">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/50" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
