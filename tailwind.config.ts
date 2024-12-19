import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        cyber: {
          primary: '#f0db4f',
          secondary: '#ff003c',
          accent: '#9470dc',
          background: {
            light: '#ffffff',
            dark: '#1a1a1a',
          },
          text: {
            light: '#1a1a1a',
            dark: '#e0e0e0',
          },
          border: {
            light: '#9470dc',
            dark: '#9470dc',
          },
        },
      },
      fontFamily: {
        cyber: ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        cyber: '0 0 10px rgba(148, 112, 220, 0.5)',
        'cyber-hover': '0 0 20px rgba(148, 112, 220, 0.8)',
      },
    },
  },
  plugins: [],
} satisfies Config
