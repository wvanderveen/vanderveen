let mix = require('laravel-mix');

mix.js('assets/scripts/main.js', 'scripts')
   .sass('assets/styles/main.scss', 'styles').options({ processCssUrls: false })
   .copy('assets/images', 'dist/images')
   .setPublicPath('dist');