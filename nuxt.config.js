import fs from "fs";
import path from "path";

const cssFiles = fs
  .readdirSync(path.resolve(__dirname, "assets/css"))
  .filter((file) => file.endsWith(".css"))
  .map((file) => `~/assets/css/${file}`);
export default {
  ssr: false,

  target: "static",

  head: {
    title: "ItIsDev",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { property: "og:url", content: "http://project10949551.tilda.ws" },
      { property: "og:title", content: "DEV" },
      { property: "og:description", content: "" },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "/images/ffb6456b-781b-40e8-9517-ffb5225e8bcd__-__resize__504x__imgfish.jpg",
      },
      { name: "format-detection", content: "telephone=no" },
      { "http-equiv": "x-dns-prefetch-control", content: "on" },
    ],
    link: [
      { rel: "canonical", href: "http://project10949551.tilda.ws" },
      { rel: "dns-prefetch", href: "https://ws.tildacdn.com" },
      {
        rel: "shortcut icon",
        href: "/images/favicon.png",
        type: "image/x-icon",
      },
      { rel: "stylesheet", href: "/css/tilda-grid-3.0.min.css" },
      {
        rel: "stylesheet",
        href: "/css/tilda-blocks-page56709929.min.css@t=1733220870.css",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&subset=latin,cyrillic",
      },
      { rel: "stylesheet", href: "/css/tilda-animation-2.0.min.css" },
      {
        rel: "stylesheet",
        href: "/css/tilda-popup-1.1.min.css",
        media: "print",
        onload: "this.media='all'",
      },
      { rel: "stylesheet", href: "/css/tilda-forms-1.0.min.css" },
    ],
    script: [
      { src: "js/tilda-fallback-1.0.min", charset: "utf-8", async: true },
      {
        src: "js/tilda-polyfill-1.0.min.js",
        charset: "utf-8",
        nomodule: true,
      },
      {
        src: "js/tilda-scripts.js",
        module: true,
      },
      {
        src: "js/index.js",
        type: "text/javascript",
      },
      { src: "js/jquery-1.10.2.min.js", charset: "utf-8" },
      {
        src: "js/tilda-scripts-3.0.min.js",
        charset: "utf-8",
        defer: true,
      },
      {
        src: "js/tilda-blocks-page56709929.min.js",
        charset: "utf-8",
        async: true,
      },
      { src: "js/lazyload-1.3.min.export.js", charset: "utf-8", async: true },
      {
        src: "js/tilda-animation-2.0.min.js",
        charset: "utf-8",
        async: true,
      },
      { src: "js/tilda-zero-1.1.min.js", charset: "utf-8", async: true },
      {
        src: "https://neo.tildacdn.com/js/tilda-fallback-1.0.min.js",
        async: true,
        charset: "utf-8",
      },
      {
        src: "js/tilda-forms-1.0.min.js",
        charset: "utf-8",
        async: true,
      },
      {
        src: "js/tilda-popup-1.0.min.js",
        charset: "utf-8",
        async: true,
      },
      {
        src: "js/tilda-zero-forms-1.0.min.js",
        charset: "utf-8",
        async: true,
      },
      {
        src: "js/tilda-animation-ext-1.0.min.js",
        charset: "utf-8",
        async: true,
      },
      {
        src: "js/tilda-zero-scale-1.0.min.js",
        charset: "utf-8",
        async: true,
      },
      {
        src: "js/tilda-zero-fixed-1.0.min.js",
        charset: "utf-8",
        async: true,
      },
      {
        src: "js/tilda-events-1.0.min.js",
        charset: "utf-8",
        async: true,
      },
      {
        hid: "datalayer-script",
        innerHTML: "window.dataLayer = window.dataLayer || [];",
        type: "text/javascript",
        charset: "utf-8",
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      "datalayer-script": ["innerHTML"],
    },

    plugins: [{ src: "~/plugins/tilda.js", mode: "client" }],
  },

  css: cssFiles,

  components: true,

  buildModules: [],

  modules: [],

  build: {},
};
