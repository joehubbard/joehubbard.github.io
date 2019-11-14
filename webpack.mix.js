const mix = require('laravel-mix');

mix.js([
    'node_modules/jquery/dist/jquery.min.js',
    'assets/js/main.js'
    ], 'public/js/main.js')
   .sass('assets/scss/main.scss', 'public/css')
   .options({processCssUrls: false });

