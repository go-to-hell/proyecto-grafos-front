/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
      mono: ['Rokkitt', 'monospace'],
    },
    extend: {
      colors: {
        teal: '#5F8670',
        yellow: '#FF9800',
        orange: '#EE9322',
        red: {
          DEFAULT: '#820300',
          light: '#DD5353',
        },
      },
    },
  },
  plugins: [],
}