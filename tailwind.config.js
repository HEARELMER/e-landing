/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}"],
  theme: {
    extend: {
      colors:{
        'primary': {
          100: '##6d28d9'
        },
        'secondary': {
          100:'#e4e4e4',
          200:'#ddd6fe',
          300:'#7c3aed',
        },

      }
    },
  },
  plugins: [],
}