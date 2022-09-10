import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    // isProduction: true,
    ssr: false,
    
    autoImports: {
        global: true,
    },
    
    
    // components: {
    //     global: true,
    //     dirs: [
    //         '~/components',
    //     ]
    // },

    modules: [
        '~/modules',
        '@nuxtjs/supabase',
        '@nuxt/image-edge',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@unocss/nuxt',
        "@nuxtjs/color-mode",
    ],

})
