import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    // isProduction: true,
    ssr: false,
    
    
    modules: [
        '~/modules/utilities/src/module.ts',
        '~/modules/systemapps/src/module.ts',
        '~/modules/core/src/module.ts',
        '@nuxtjs/supabase',
        '@nuxt/image',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@unocss/nuxt',
        "@nuxtjs/color-mode",
    ],

})
