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

    ],

    colorMode: {
        classSuffix: ''
    },

    unocss: {
        // presets
        // uno: true, // enabled `@unocss/preset-uno`
        // https://icon-sets.iconify.design/
        // icons: true, // enabled `@unocss/preset-icons`
        // attributify: true, // enabled `@unocss/preset-attributify`,
        theme: {
            colors: {
                'primary': { DEFAULT: '#244481', '50': '#FFFFFF', '100': '#F0F4FB', '200': '#D1DCF2', '300': '#B1C4E9', '400': '#91ACE0', '500': '#7194D7', '600': '#517CCE', '700': '#3666C1', '800': '#2D55A1', '900': '#244481' },
                'secondary': {  DEFAULT: '#6B7280',  '50': '#CDD0D5',  '100': '#C2C5CC',  '200': '#ACB0BA',  '300': '#969BA7',  '400': '#7F8694',  '500': '#6B7280',  '600': '#515761',  '700': '#383C43',  '800': '#1E2024',  '900': '#050506'},                
                'error': {  DEFAULT: '#EF4444',  '50': '#FDEDED',  '100': '#FCDADA',  '200': '#F9B5B5',  '300': '#F58F8F',  '400': '#F26A6A',  '500': '#EF4444',  '600': '#E71414',  '700': '#B30F0F',  '800': '#800B0B',  '900': '#4C0707'},
                'warning': {  DEFAULT: '#F59E0B',  '50': '#FCE4BB',  '100': '#FBDCA8',  '200': '#FACD81',  '300': '#F8BD59',  '400': '#F7AE32',  '500': '#F59E0B',  '600': '#C07C08',  '700': '#8A5906',  '800': '#543603',  '900': '#1E1401'},
                'success': {  DEFAULT: '#10B981',  '50': '#8CF5D2',  '100': '#79F3CB',  '200': '#53F0BC',  '300': '#2EEDAE',  '400': '#13DF9B',  '500': '#10B981',  '600': '#0C855D',  '700': '#075239',  '800': '#031E15',  '900': '#000000'},



            },
        }
    },

})
