// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "CU courses",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [],
      link: [],
      style: [],
      noscript: [
        { children: "Javascript is required" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/strapi", "@nuxt/image-edge", "nuxt-icon"],
  strapi: {
    url: "http://localhost:1337",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

});
