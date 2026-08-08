'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function PressLink({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const reduced = useReducedMotion();
  const MotionLink = motion(Link);

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        whileTap={reduced ? undefined : { scale: 0.96 }}
        transition={{ type: 'spring', damping: 22, stiffness: 400 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionLink
      href={href}
      className={className}
      whileTap={reduced ? undefined : { scale: 0.96 }}
      transition={{ type: 'spring', damping: 22, stiffness: 400 }}
    >
      {children}
    </MotionLink>
  );
}
