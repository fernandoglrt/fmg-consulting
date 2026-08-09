'use client';

import { motion, useReducedMotion } from 'framer-motion';

const WHATSAPP_URL =
  'https://wa.me/5551981898705?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20FMG%20Consulting%20e%20gostaria%20de%20falar%20com%20o%20Fl%C3%A1vio.';

export function WhatsAppButton() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="group fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: reduced ? 1 : 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', damping: 16, stiffness: 220, delay: 0.4 }}
    >
      <span
        role="tooltip"
        className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-full bg-ink px-3.5 py-2 text-[13px] font-medium text-white opacity-0 shadow-lifted transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      >
        Fale no WhatsApp
      </span>

      {!reduced && (
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.7, 1.7], opacity: [0.55, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2.4, ease: 'easeOut' }}
        />
      )}

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20"
        whileHover={reduced ? undefined : { scale: 1.08 }}
        whileTap={reduced ? undefined : { scale: 0.94 }}
        transition={{ type: 'spring', damping: 18, stiffness: 320 }}
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
          <path d="M16.02 3C9.4 3 4.03 8.36 4.03 15c0 2.32.64 4.48 1.76 6.33L3 29l7.86-2.72A11.9 11.9 0 0 0 16.02 27C22.65 27 28 21.64 28 15S22.65 3 16.02 3Zm0 21.7c-1.98 0-3.83-.56-5.4-1.53l-.39-.23-4.66 1.62 1.55-4.53-.25-.4a9.66 9.66 0 0 1-1.5-5.13c0-5.36 4.36-9.72 9.65-9.72 5.28 0 9.65 4.36 9.65 9.72 0 5.36-4.37 9.72-9.65 9.72Zm5.3-7.28c-.29-.15-1.71-.85-1.98-.94-.27-.1-.46-.15-.65.14-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.19 2.06 3.15 5 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.71-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
        </svg>
      </motion.a>
    </motion.div>
  );
}
