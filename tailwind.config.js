/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black-t-50': 'rgba(0,0,0,0.5)',
        'black-t-30': 'rgba(0,0,0,0.3)',
      },
      keyframes: {
        'open-menu': {
          '0%': { width: '0%' },
          '80%': { width: '80%'},
          '100%': { width: '100%'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.4s ease-in-out forwards',
      }
    },
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
         'h1': { fontSize: "35px" },
         'h2': { fontSize: "30px" },
         'h3': { fontSize: "23px" },
         'h4': { fontSize: "20px" },
       })
    }),
  ],
}

