import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1d1d1f',
        paper: '#fbfbfd',
        accent: {
          DEFAULT: '#1a86c9',
          soft: '#4fa8dd',
          deep: '#0f5f96',
        },
        slate: '#3d6a90',
        surface: {
          DEFAULT: '#0b1420',
          soft: '#121e2e',
        },
        tint: {
          DEFAULT: '#eef3fb',
          deep: '#dfe9fa',
        },
        coral: '#ff7a59',
        mint: '#1fb892',
        line: 'rgba(0,0,0,0.08)',
        'line-dark': 'rgba(255,255,255,0.1)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,24,32,0.04), 0 12px 32px -12px rgba(16,24,32,0.12)',
        lifted: '0 2px 4px rgba(16,24,32,0.06), 0 24px 48px -16px rgba(16,24,32,0.18)',
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(26,134,201,0.45)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"Segoe UI"',
          'system-ui',
          'Roboto',
          'sans-serif',
        ],
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
