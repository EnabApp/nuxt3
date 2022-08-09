import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, '.nuxt');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
    const data = fs.readFileSync(path.join(directoryPath, 'imports.d.ts'), 'utf8')
    console.log(data)
});


export default defineNuxtConfig({
    isProduction: true,
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
