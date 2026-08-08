'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={reduced ? undefined : { scale: 0.9 }}
      aria-label="Copiar"
      className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink/35 transition-colors hover:bg-tint hover:text-accent"
    >
      {copied ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-mint" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 12.5 4.5 4.5L19 7" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <rect x="8.5" y="8.5" width="11" height="11" rx="2" />
          <path d="M15.5 8.5V6.5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
        </svg>
      )}
    </motion.button>
  );
}
