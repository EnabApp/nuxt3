// import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    // isProduction: true,
    // ssr: false,
    imports: {
        dirs: [
            'composables/**',
            'models/**'
        ],
    },

    modules: [
        '@enab/components',
        '@nuxt/image-edge',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@unocss/nuxt',
        "@nuxtjs/color-mode",
    ],
    runtimeConfig: {
        mongoUrl: process.env.MONGO_URL,
    },

    nitro: {
        plugins: ["~/server/index.ts"],
    },

})
