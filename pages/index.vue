<template>
  <div class="t-body" style="margin: 0; padding: 0">
    <div
      id="allrecords"
      data-tilda-export="yes"
      class="t-records"
      data-hook="blocks-collection-content-node"
      data-tilda-project-id="10949551"
      data-tilda-page-id="56709929"
      data-tilda-formskey="15b163b05ae351781d93030a10949551"
      data-tilda-cookie="no"
      data-tilda-lazy="yes"
      data-tilda-root-zone="com"
      data-tilda-ts="y"
    >
      <Header />
      <Hero />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Hero from "~/components/Hero.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "ItIsDev",
  components: {
    Header,
    Hero,
    Footer,
  },
  mounted() {
    if (!window.mainTracker) {
      window.mainTracker = "tilda";
    }
    window.tildastatcookie = "no";
    setTimeout(() => {
      (function (d, w, k, o, g) {
        const n = d.getElementsByTagName(o)[0];
        const s = d.createElement(o);
        const f = () => n.parentNode.insertBefore(s, n);
        s.type = "text/javascript";
        s.async = true;
        s.key = k;
        s.id = "tildastatscript";
        s.src = g;
        if (w.opera === "[object Opera]") {
          d.addEventListener("DOMContentLoaded", f, false);
        } else {
          f();
        }
      })(
        document,
        window,
        "c5d21271fdfee975e91b97f51a0d8f85",
        "script",
        "js/tilda-stat-1.0.min.js"
      );
    }, 2000);
  },
};
</script>
