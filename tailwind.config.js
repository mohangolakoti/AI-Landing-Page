/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lilita:["Lilita One", "sans-serif"],
        Montserrat:["Montserrat", "sans-serif"],
        OpenSans:["Open Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}