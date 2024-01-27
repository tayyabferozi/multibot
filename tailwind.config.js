/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url('../public/assets/noise.png')",
      },
      fontFamily: {
        sans: ["Anton", ...defaultTheme.fontFamily.sans],
        abel: ["Abel", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
