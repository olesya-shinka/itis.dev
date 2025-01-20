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
      filter: {
        "blur-0": "blur(0)",
      },
      zIndex: {
        990: "990",
        15: "15",
        989: "989",
        2: "2",
        3: "3",
        6: "6",
        7: "7",
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
        "max-1919": { max: "1919px" }, // max-width: 1919px
        "max-1679": { max: "1679px" }, // max-width: 1679px
        "max-1399": { max: "1399px" }, // max-width: 1399px
        "max-1200": { max: "1200px" }, // max-width: 1200px
        "max-1199": { max: "1199px" }, // max-width: 1199px
        "max-959": { max: "959px" }, // max-width: 959px
        "max-639": { max: "639px" }, // max-width: 639px
        "max-479": { max: "479px" },
        "max-480": { max: "480px" }, // max-width: 479px
        "max-980": { max: "980px" }, // max-width: 980px
        "max-640": { max: "640px" }, // max-width: 640px
        "max-320": { max: "320px" }, // max-width: 320px
        "min-321": { min: "321px" }, // min-width: 321px
        "min-481": { min: "481px" }, // min-width: 481px
        "min-641": { min: "641px" }, // min-width: 641px
        "min-981": { min: "981px" }, // min-width: 981px
        "min-1201": { min: "1201px" }, // min-width: 1201px
        "max-960": { max: "960px" },
      },
      lineHeight: {
        28: "28px",
      },
    },
  },
  plugins: [],
};
