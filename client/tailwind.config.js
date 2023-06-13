/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'dark': '#1D1D1D'
      },
      backgroundImage: {
        'hero-bg': 'url(./img/hero-bg.png)'
      }
    },
  },
  plugins: [],
}
