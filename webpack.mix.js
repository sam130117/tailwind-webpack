const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.sass('src/tailwind.scss', 'dist')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.config.js')],
    })
    .setPublicPath('dist');