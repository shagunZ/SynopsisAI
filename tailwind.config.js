/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi:["Satoshi","sans-serif"],
        inter:["Inter","sans-serif"],
        poppins:["Poppins","sans-serif"]
      }
    },
  },
  plugins: [],
}