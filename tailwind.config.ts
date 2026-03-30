import type { Config } from 'tailwindcss';
import { COLORS, EASING } from './src/lib/constants';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: COLORS.black,
        white: COLORS.white,
        elevated: COLORS.elevated,
        surface: COLORS.surface,
        accent: COLORS.accent,
        accent2: COLORS.accent2,
        text: COLORS.text,
        glass: COLORS.glass,
      },
      fontFamily: {
        sans: ['var(--font-instrument)'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1440px',
      },
      borderRadius: {
        glass: '16px',
        pill: '50px',
      },
      backdropBlur: {
        glass: '20px',
      },
      transitionTimingFunction: {
        smooth: EASING.smooth,
        base: EASING.base,
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        'status-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        }
      },
      animation: {
        'status-pulse': 'status-pulse 2.4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
