// import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // isProduction: true,
  // ssr: false,
  css: ["@/assets/sass/main.scss"],
  components: {
    global: true,
    dirs: ["~/components", "~/businesses"],
  },
  imports: {
    dirs: ["composables/client/**", "models/**", "stores/**", "composables/shared/**"],
  },

  modules: [
    "@enab/components",
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
  ],
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
    mongoAppId: process.env.MONGO_APP_ID,
  },

  nitro: {
    plugins: ["~/server/index.ts"],
    imports: {
      dirs: ["composables/server/**/**", "schemas/**/**"],
    },
  },
});
