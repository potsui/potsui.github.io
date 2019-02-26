# potsui.github.io

Development playground for my website: [potsui.github.io](https://potsui.github.io/)

### About
Built with HTML, CSS with [Less](http://lesscss.org/), JavaScript with [jQuery](https://jquery.com/), and [Bootstrap](https://getbootstrap.com/docs/3.3/). I develop within the `private/` directory and use [Grunt](https://gruntjs.com/) to build into minified, compressed output files.

### Set up
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
