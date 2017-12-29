# potsui.github.io

Development playground for my website: [tsuipo.com](https://www.tsuipo.com)

Built with HTML, CSS with [Less](http://lesscss.org/), JavaScript with [jQuery](https://jquery.com/), and [Bootstrap](https://getbootstrap.com/docs/3.3/). I develop within the `private/` directory and use [Grunt](https://gruntjs.com/) to build into minified, compressed output files inside `public/`.

If you would like to mimic my workflow, then here are some starter steps:
1. Make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) installed. The easiest way to do that for Mac OS is with [Homebrew](https://brew.sh/).
2. Install development dependencies listed in the `package.json`:
```
npm install
```
3. Check out the `Gruntfile.js`, which lists the tasks I run. To have tasks run automatically on file change:
```
grunt watch
```
You can also run tasks manually if you want:
```
grunt default
```
4. Check out how I organize my files in `private/`.
