import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    isProduction: true,
    ssr: false,

    autoImports: {
        global: true
    },
    
    build: {
        analyze: true,
    },

    components: {
        global: true,
        dirs: [
            '~/components',
        ]
    },

    modules: [
        // '@enab/calculator',

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

    // experimental: {
    //     viteNode: true
    // },

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
        safelist: [
            // Sizes
            ...(() => {
                let sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl', '10xl']
                return [
                    ...sizes.map(size => `min-w-${size}`),
                    ...sizes.map(size => `min-h-${size}`),
                    ...sizes.map(size => `max-w-${size}`),
                    ...sizes.map(size => `max-h-${size}`),
                ]
            })(),
            // Icons
            ...[
                'i-ic-baseline-calculate',
                'i-bxs-cart',
                'i-ri-todo-fill',
            ]
        ],
        preflights: [
            // color: ${theme.colors.gray?.[700]};
            {
                getCSS: ({ theme }) => `
                * {
                  padding: 0;
                  margin: 0;
                  font-family: ${theme.fontFamily?.sans};
                  -webkit-touch-callout: none; /* iOS Safari */
                  -webkit-user-select: none; /* Safari */
                   -khtml-user-select: none; /* Konqueror HTML */
                     -moz-user-select: none; /* Firefox */
                      -ms-user-select: none; /* Internet Explorer/Edge */
                          user-select: none; /* Non-prefixed version, currently
                                                supported by Chrome and Opera */
                }
                body {
                    overflow: hidden;
                }
              `
            }
        ],
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
                's': {
                    '100': "rgba(112, 128, 144, 1)",
                    '95': "rgba(112, 128, 144, 0.95)",
                    '90': "rgba(112, 128, 144, 0.9)",
                    '85': "rgba(112, 128, 144, 0.85)",
                    '80': "rgba(112, 128, 144, 0.8)",
                    '75': "rgba(112, 128, 144, 0.75)",
                    '70': "rgba(112, 128, 144, 0.7)",
                    '65': "rgba(112, 128, 144, 0.65)",
                    '60': "rgba(112, 128, 144, 0.6)",
                    '55': "rgba(112, 128, 144, 0.55)",
                    '50': "rgba(112, 128, 144, 0.5)",
                    '45': "rgba(112, 128, 144, 0.45)",
                    '40': "rgba(112, 128, 144, 0.4)",
                    '35': "rgba(112, 128, 144, 0.35)",
                    '30': "rgba(112, 128, 144, 0.3)",
                    '25': "rgba(112, 128, 144, 0.25)",
                    '20': "rgba(112, 128, 144, 0.2)",
                    '15': "rgba(112, 128, 144, 0.15)",
                    '10': "rgba(112, 128, 144, 0.1)",
                    '5': "rgba(112, 128, 144, 0.05)",
                },
                // 'primary': {  DEFAULT: '#58134D',  '50': '#911F7E',  '100': '#8B1D78',  '200': '#7E1B6D',  '300': '#721863',  '400': '#651558',  '500': '#58134D',  '600': '#4C1042',  '700': '#3F0D37',  '800': '#330B2C',  '900': '#260821'},
                // 'primary': {  DEFAULT: '#7440F5',  '50': '#F3EEFE',  '100': '#E5DBFD',  '200': '#C9B4FB',  '300': '#AC8EF9',  '400': '#9067F7',  '500': '#7440F5',  '600': '#4E0DF0',  '700': '#3D0ABB',  '800': '#2B0786',  '900': '#1A0450'},
                // 'primary': {  DEFAULT: '#4F46E5',  '50': '#E8E7FC',  '100': '#D7D5F9',  '200': '#B5B1F4',  '300': '#938EEF',  '400': '#716AEA',  '500': '#4F46E5',  '600': '#281ED5',  '700': '#1F17A4',  '800': '#161073',  '900': '#0C0941'},
                // 'primary': { DEFAULT: '#5A7AEF', '50': '#FFFFFF', '100': '#EFF2FD', '200': '#CAD4FA', '300': '#A4B6F6', '400': '#7F98F3', '500': '#5A7AEF', '600': '#2751EA', '700': '#1339C6', '800': '#0E2B92', '900': '#091C5F' },
                'primary': {  DEFAULT: '#389BF2',  '50': '#E4F2FD',  '100': '#D1E8FC',  '200': '#ABD5FA',  '300': '#85C1F7',  '400': '#5EAEF5',  '500': '#389BF2',  '600': '#0F80E3',  '700': '#0B62AE',  '800': '#08457A',  '900': '#052745'},
                'error': { DEFAULT: '#EF4444', '50': '#FDEDED', '100': '#FCDADA', '200': '#F9B5B5', '300': '#F58F8F', '400': '#F26A6A', '500': '#EF4444', '600': '#E71414', '700': '#B30F0F', '800': '#800B0B', '900': '#4C0707' },
                'warning': { DEFAULT: '#F59E0B', '50': '#FCE4BB', '100': '#FBDCA8', '200': '#FACD81', '300': '#F8BD59', '400': '#F7AE32', '500': '#F59E0B', '600': '#C07C08', '700': '#8A5906', '800': '#543603', '900': '#1E1401' },
                'success': { DEFAULT: '#10B981', '50': '#8CF5D2', '100': '#79F3CB', '200': '#53F0BC', '300': '#2EEDAE', '400': '#13DF9B', '500': '#10B981', '600': '#0C855D', '700': '#075239', '800': '#031E15', '900': '#000000' },
                // 'secondary': {  DEFAULT: '#F3F8FF',  '50': '#FFFFFF',  '100': '#F3F8FF',  '200': '#DAE9FF',  '300': '#C0D9FF',  '400': '#A6C9FF',  '500': '#8DB8FF',  '600': '#73A7FF',  '700': '#5A95FF',  '800': '#4183FF',  '900': '#2770FF'},
                // 'tertiary': {  DEFAULT: '#212E4B',  '50': '#435F9B',  '100': '#3F5A92',  '200': '#384F80',  '300': '#30446E',  '400': '#28395C',  '500': '#212E4B',  '600': '#1C2740',  '700': '#172135',  '800': '#131A2B',  '900': '#0E1420'},

                // 'primary': {  DEFAULT: '#7D1E6A',  '50': '#D9629D',  '100': '#D65498',  '200': '#CF3791',  '300': '#B72C88',  '400': '#9A257A',  '500': '#7D1E6A',  '600': '#68195E',  '700': '#541450',  '800': '#3F0F3F',  '900': '#280A2B'},
                // 'secondary': {  DEFAULT: '#4B8673',  '50': '#B4D5CA',  '100': '#A7CEC1',  '200': '#8CBFAF',  '300': '#72B09C',  '400': '#5AA089',  '500': '#4B8673',  '600': '#376254',  '700': '#233E35',  '800': '#0F1A16',  '900': '#000000'},
                // 'tertiary': {  DEFAULT: '#F6FBF4',  '50': '#F6FBF4',  '100': '#E5F4DF',  '200': '#C4E5B6',  '300': '#A2D68D',  '400': '#80C764',  '500': '#61B241',  '600': '#4B8932',  '700': '#346023',  '800': '#1E3614',  '900': '#070D05'},
                // 'primary': {  DEFAULT: '#58134D',  '50': '#911F7E',  '100': '#8B1D78',  '200': '#7E1B6D',  '300': '#721863',  '400': '#651558',  '500': '#58134D',  '600': '#4C1042',  '700': '#3F0D37',  '800': '#330B2C',  '900': '#260821'},
            },
            height: {
                'sidebar': 'calc(100vh - 3.75rem)',
                'main-content': 'calc(100vh - 2.25rem)',
                'minus-bottombar': 'calc(100vh - 64px)',
            },
        },
    },

})
