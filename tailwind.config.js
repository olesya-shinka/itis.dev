/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.vue",
    "./components/Header.vue",
    "./components/Hero.vue",
    "./components/Footer.vue",
    "./assets/css/main.css",
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
        "1200px": "1200px",
        "1400px": "1400px",
        "1680px": "1680px",
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
        ".overflow-visible": {
          overflow: "visible",
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
        ".z-index-0": {
          zIndex: "0",
        },
        ".z-index-1": {
          zIndex: "1",
        },
        ".translate-z-0": {
          transform: "translateZ(0)",
        },
        ".width100%": {
          width: "100%",
        },
        ".heightvh": {
          height: "100vh",
        },
        ".top0": {
          top: "0",
        },
        ".left0": {
          left: "0",
        },
        ".-moz-transform-unset": {
          "-moz-transform": "unset",
        },
        ".transform-translateZ0": {
          transform: "translateZ(0)",
        },
        ".border-box": {
          boxSizing: "border-box",
        },
      });
    },
  ],
};
