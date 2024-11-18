import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#012061',
        border: '#E5E7EB',
        background: '#FFFFFF',
        foreground: '#000000',
        muted: {
          DEFAULT: '#F3F4F6',
          foreground: '#6B7280',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;