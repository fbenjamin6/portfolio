/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      spaceMono: 'SpaceMono'
    },
    extend: {
      colors: {
        purple: '#A580FC',
        customGray: '#BBBBBB'
      }
    },
  },
  plugins: [],
}

