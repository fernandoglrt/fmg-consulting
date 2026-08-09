import type { SVGProps } from 'react';

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9.98h4v10.52H3V9.98Zm7 0h3.83v1.44h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v6.04h-4v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.06 1.39-2.06 2.83v5.45h-4V9.98Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.55a2.51 2.51 0 0 0-1.77-1.78C18.34 5.37 12 5.37 12 5.37s-6.34 0-7.83.4A2.51 2.51 0 0 0 2.4 7.55C2 9.04 2 12.16 2 12.16s0 3.13.4 4.62c.22.83.9 1.49 1.77 1.71 1.5.4 7.83.4 7.83.4s6.34 0 7.83-.4a2.51 2.51 0 0 0 1.77-1.71c.4-1.5.4-4.62.4-4.62s0-3.13-.4-4.61ZM10 15.02V9.3l5.2 2.86-5.2 2.86Z" />
    </svg>
  );
}
