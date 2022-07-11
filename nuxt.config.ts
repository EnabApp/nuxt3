import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        // UnoCSS
        '@unocss/nuxt',

        // Color Mode
        "@nuxtjs/color-mode",

        // Lodash
        "nuxt-lodash",

        // harlem
        "@nuxtjs/harlem",

    ],

    colorMode: {
        classSuffix: ''
    }

    
})
