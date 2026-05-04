/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#19046e',
          light: '#19046e',
          lighter: '#19046e',
          subtle: '#f0edf8',
        },
        accent: {
          DEFAULT: '#ffd19f',
          dark: '#e6a54d',
        },
        text: {
          DEFAULT: '#1a1a2e',
          muted: '#6b6b8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'apple': '1.25rem',
        'apple-lg': '1.75rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
