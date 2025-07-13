/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 2s infinite',
        pulse: 'pulse 1s infinite',
      },
      fontFamily: {
        mono: ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
      },
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
