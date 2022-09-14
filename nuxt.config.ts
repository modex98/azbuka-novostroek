import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  meta: {
    title: "Азбука Новостроек",
    titleTemplate: (title: string) => `Азбука - ${title}`,
  },

  modules: ["nuxt-icon"],

  components: {
    global: true,
    dirs: ["~/components/UI"],
  },

  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },

  css: ["~/assets/scss/index.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/_mixins.scss";`,
        },
      },
    },
  },
});

/*
  @import "@/assets/scss/_functions.scss";
  @import "@/assets/scss/_reset.scss";
  @import "@/assets/scss/_keyframes.scss";
*/