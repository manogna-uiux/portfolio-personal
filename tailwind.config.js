/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-primary)'],
        heading: ['var(--font-heading)'],
        display: ['var(--font-display)'],
      },
    },
  },
  plugins: [],
} 