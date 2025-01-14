/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.vue",
    "./components/Header.vue",
    "./components/Hero.vue",
    "./components/Footer.vue",
    "./assets/css/tailwind.css",
  ],
  theme: {
    extend: {
      textSizeAdjust: {
        100: "100%",
      },
      transformOrigin: {
        "top-left": "top left",
      },
      fontFamily: {
        sans: ["Manrope", "Arial", "sans-serif"],
      },
      screens: {
        "custom-lg": { max: "1200px" },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-size-adjust-100": {
          "-webkit-text-size-adjust": "100%",
          "-moz-text-size-adjust": "100%",
          "-ms-text-size-adjust": "100%",
        },
        ".overflow-hidden": {
          overflow: "hidden",
        },
        ".visibility-hidden": {
          visibility: "hidden",
        },
        ".visibility-visible": {
          visibility: "visible",
        },
        ".display-table": {
          display: "table",
        },
        ".display-table-cell": {
          display: "table-cell",
        },
        ".position-fixed": {
          position: "fixed",
        },
        ".position-relative": {
          position: "relative",
        },
        ".position-absolute": {
          position: "absolute",
        },
        ".z-index-10000": {
          zIndex: "10000",
        },
        ".translate-z-0": {
          transform: "translateZ(0)",
        },
      });
    },
  ],
};
