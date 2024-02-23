/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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

