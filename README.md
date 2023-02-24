# Welcome to Will's Website (WWW, get it?)!
It's pretty nice here.

## Development Instructions:
We're using [Laravel Mix](https://laravel-mix.com/) now to minify files and stuff. So that means you're gonna have to use node to work on this site.

The first time you work on this project you'll need to run an `npm install`. This will download all of the things needed to work on the site.

While you're working on the site, after making a change to anything in the assets folder, you need to run `npx mix` which will recomplie the SCSS and JS and copy over new images to the `/dist/` folder.

Once you're done making changes, you need to run `npx mix --production`, which will build a production-ready minified version of your CSS and JS.

## Going Live:
This site is hosted with GitHub pages, so all you need to do to make it live is to merge code changes to the `master` branch.

## Todo/Improvements:
 - Add SSL
 - Optimize images/image files on `--production` flag (I tried a few Laravel Mix plugins for this but neither of them worked quickly)
 - Maybe there's a better build pipeline, idk ¯\\_(ツ)_/¯
