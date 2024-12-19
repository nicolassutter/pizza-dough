/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        'cyber': {
          primary: '#f0db4f',
          secondary: '#ff003c',
          accent: '#00fff5',
          background: {
            light: '#ffffff',
            dark: '#1a1a1a'
          },
          text: {
            light: '#1a1a1a',
            dark: '#e0e0e0'
          },
          border: {
            light: '#00fff5',
            dark: '#00fff5'
          }
        }
      },
      fontFamily: {
        cyber: ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'cyber': '0 0 10px rgba(0, 255, 245, 0.5)',
        'cyber-hover': '0 0 20px rgba(0, 255, 245, 0.8)',
      },
    },
  },
  plugins: [],
};