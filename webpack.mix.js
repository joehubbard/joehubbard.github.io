const mix = require('laravel-mix');

mix.js([
    'assets/js/main.js',
    'assets/js/embed.js'
    ], 'public/js')
   .sass('assets/scss/main.scss', 'public/css')
   .options({processCssUrls: false });

