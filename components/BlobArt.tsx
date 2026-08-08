'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function BlobArt() {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <motion.div
        aria-hidden
        className="absolute -left-6 top-4 h-40 w-40 rounded-[40%] bg-accent/15"
        animate={reduced ? undefined : { rotate: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-6 right-2 h-32 w-32 rounded-[45%] bg-coral/15"
        animate={reduced ? undefined : { rotate: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div aria-hidden className="absolute right-8 top-10 h-20 w-20 rounded-full bg-mint/15" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-56 w-56 items-center justify-center rounded-[36px] bg-white shadow-lifted">
          <svg viewBox="0 0 24 24" className="h-24 w-24 text-accent" fill="none" stroke="currentColor" strokeWidth={1.3}>
            <circle cx="9" cy="8" r="3" />
            <path d="M3.25 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
            <circle cx="17" cy="8" r="2.4" />
            <path d="M15.5 14.2c2.6.3 4.5 2.6 4.5 5.3" />
          </svg>
        </div>
        <div className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-white shadow-lifted">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4v14M6 12l6 6 6-6" transform="rotate(180 12 12)" />
          </svg>
        </div>
        <div className="absolute -bottom-4 -left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lifted">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-mint" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12.5 4.5 4.5L19 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
