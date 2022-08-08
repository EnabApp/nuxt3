import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // isProduction: true,
    ssr: false,

    autoImports: {
        global: true
    },
    
    // build: {
    //     analyze: true,
    // },

    components: {
        global: true,
        dirs: [
            '~/components',
        ]
    },

    modules: [
        '@enab/core',

        '@enab/ui',

        // Color Mode
        "@nuxtjs/color-mode",

        // Lodash
        "nuxt-lodash",

        // https://vueuse.org/guide/
        '@vueuse/nuxt',

        // UnoCSS
        '@unocss/nuxt',

        // Pinia
        '@pinia/nuxt',

        // Image
        '@nuxt/image-edge',

        // Motion
        '@vueuse/motion/nuxt',
        
    ],

})
