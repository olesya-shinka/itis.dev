/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.{vue,js,ts}",
    "./components/Header.{vue,js,ts}",
    "./components/Hero.{vue,js,ts}",
    "./components/Footer.{vue,js,ts}",
    "./plugins/tilda.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
