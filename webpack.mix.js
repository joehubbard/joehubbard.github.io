const mix = require('laravel-mix');

mix.js('assets/js/main.js', 'public/js')
   .sass('assets/scss/main.scss', 'public/css')
   .options({processCssUrls: false });

