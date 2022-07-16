import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        // Color Mode
        "@nuxtjs/color-mode",

        // Lodash
        "nuxt-lodash",

        // https://vueuse.org/guide/
        '@vueuse/nuxt',

        // UnoCSS
        '@unocss/nuxt',

    ],

    colorMode: {
        // preference: 'light',
        classSuffix: ''
    },

    unocss: {
        // autoImport: true,
        // preflight: true,
        uno: true, // enabled `@unocss/preset-uno`
        // https://icon-sets.iconify.design/
        icons: true, // enabled `@unocss/preset-icons`
        attributify: {
            ignoreAttributes: ['label'],
            // prefix: 'un-',
        }, // enabled `@unocss/preset-attributify`,
        typography: true, // enabled `@unocss/preset-typography`
        webFonts: {
            provider: 'google', // default provider
            fonts: {
                // these will extend the default theme
                sans: ['Tajawal:200,300,400,500,700,800,900'],
            },
        },
        theme: {
            colors: {
                'w': {
                    '100': "rgba(255, 255, 255, 1)",
                    '95': "rgba(255, 255, 255, 0.95)",
                    '90': "rgba(255, 255, 255, 0.9)",
                    '85': "rgba(255, 255, 255, 0.85)",
                    '80': "rgba(255, 255, 255, 0.8)",
                    '75': "rgba(255, 255, 255, 0.75)",
                    '70': "rgba(255, 255, 255, 0.7)",
                    '65': "rgba(255, 255, 255, 0.65)",
                    '60': "rgba(255, 255, 255, 0.6)",
                    '55': "rgba(255, 255, 255, 0.55)",
                    '50': "rgba(255, 255, 255, 0.5)",
                    '45': "rgba(255, 255, 255, 0.45)",
                    '40': "rgba(255, 255, 255, 0.4)",
                    '35': "rgba(255, 255, 255, 0.35)",
                    '30': "rgba(255, 255, 255, 0.3)",
                    '25': "rgba(255, 255, 255, 0.25)",
                    '20': "rgba(255, 255, 255, 0.2)",
                    '15': "rgba(255, 255, 255, 0.15)",
                    '10': "rgba(255, 255, 255, 0.1)",
                    '5': "rgba(255, 255, 255, 0.05)",
                },
                'b': {
                    '100': "rgba(0, 0, 0, 1)",
                    '95': "rgba(0, 0, 0, 0.95)",
                    '90': "rgba(0, 0, 0, 0.9)",
                    '85': "rgba(0, 0, 0, 0.85)",
                    '80': "rgba(0, 0, 0, 0.8)",
                    '75': "rgba(0, 0, 0, 0.75)",
                    '70': "rgba(0, 0, 0, 0.7)",
                    '65': "rgba(0, 0, 0, 0.65)",
                    '60': "rgba(0, 0, 0, 0.6)",
                    '55': "rgba(0, 0, 0, 0.55)",
                    '50': "rgba(0, 0, 0, 0.5)",
                    '45': "rgba(0, 0, 0, 0.45)",
                    '40': "rgba(0, 0, 0, 0.4)",
                    '35': "rgba(0, 0, 0, 0.35)",
                    '30': "rgba(0, 0, 0, 0.3)",
                    '25': "rgba(0, 0, 0, 0.25)",
                    '20': "rgba(0, 0, 0, 0.2)",
                    '15': "rgba(0, 0, 0, 0.15)",
                    '10': "rgba(0, 0, 0, 0.1)",
                    '5': "rgba(0, 0, 0, 0.05)",
                },
                'primary': {  DEFAULT: '#5A7AEF',  '50': '#FFFFFF',  '100': '#EFF2FD',  '200': '#CAD4FA',  '300': '#A4B6F6',  '400': '#7F98F3',  '500': '#5A7AEF',  '600': '#2751EA',  '700': '#1339C6',  '800': '#0E2B92',  '900': '#091C5F'},
                'error': { DEFAULT: '#EF4444', '50': '#FDEDED', '100': '#FCDADA', '200': '#F9B5B5', '300': '#F58F8F', '400': '#F26A6A', '500': '#EF4444', '600': '#E71414', '700': '#B30F0F', '800': '#800B0B', '900': '#4C0707' },
                'warning': { DEFAULT: '#F59E0B', '50': '#FCE4BB', '100': '#FBDCA8', '200': '#FACD81', '300': '#F8BD59', '400': '#F7AE32', '500': '#F59E0B', '600': '#C07C08', '700': '#8A5906', '800': '#543603', '900': '#1E1401' },
                'success': { DEFAULT: '#10B981', '50': '#8CF5D2', '100': '#79F3CB', '200': '#53F0BC', '300': '#2EEDAE', '400': '#13DF9B', '500': '#10B981', '600': '#0C855D', '700': '#075239', '800': '#031E15', '900': '#000000' },
            },
            height: {
                'sidebar': 'calc(100vh - 3.75rem)',
                'main-content': 'calc(100vh - 2.25rem)',
            }
        },
    },

})
