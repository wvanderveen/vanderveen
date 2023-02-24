let mix = require('laravel-mix');

mix.browserSync('vanderveen.test');

mix.js('assets/scripts/main.js', 'scripts')
   .sass('assets/styles/main.scss', 'styles')
   .setPublicPath('dist');