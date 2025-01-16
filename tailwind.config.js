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
      zIndex: {
        990: "990",
      },
      zIndex: {
        15: "15",
      },
      zIndex: {
        989: "989",
      },
      textIndent: {
        "-22": "-22px",
      },
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
        lg: { max: "1200px" }, // max-width: 1200px
        sm: { max: "640px" }, // max-width: 640px
        ss: { max: "480px" }, // max-width: 480px
        "max-980": { max: "980px" }, // max-width: 980px
        "max-640": { max: "640px" }, // max-width: 640px
        "max-480": { max: "480px" }, // max-width: 480px
        "max-320": { max: "320px" }, // max-width: 320px
        "min-321": { min: "321px" }, // min-width: 321px
        "min-481": { min: "481px" }, // min-width: 481px
        "min-641": { min: "641px" }, // min-width: 641px
        "min-981": { min: "981px" }, // min-width: 981px
        "min-1201": { min: "1201px" }, // min-width: 1201px
        "max-960": { max: "960px" },
        "max-640": { max: "640px" },
      },
      lineHeight: {
        "28": "28px",
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
