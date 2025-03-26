import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          text: '#252626',
        },
      },
      fontSize: {
        base: '14px',
      },
    },
  },
  plugins: [],
} satisfies Config;
