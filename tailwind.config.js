/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darknavy: "#1f3251",
        grey: "#7b879d",
        lightgrey: "#D5E1EF"
      }
    },
  },
  plugins: [],
}
