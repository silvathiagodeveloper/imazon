/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5542F6',
        highlight: '#EAE8FB',
        bgGray: '#FBFAFD',
      }
    },
  },
  plugins: [],
}

