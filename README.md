# aurelia-plugin-skeleton

[![Build Status](https://travis-ci.org/SpoonX/aurelia-plugin-skeleton.svg)](https://travis-ci.org/SpoonX/aurelia-plugin-skeleton)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://gitter.im/SpoonX/Dev)

Starter package for aurelia-plugins following SpoonX conventions.

This aurelia-plugin starter repository uses [spoonx-tools](https://github.com/SpoonX/spoonx-tools) for all the gulp build tasks, karma setup and linting rules.

Features:
* jspm as package manager for the plugin
* babel6 and babel-dts-builder for transpilation 
* builds for all module loaders and creates a usable basic d.ts file for typescript
* contains all the entries for jspm, webpack or aurelia-cli installation, for both, ESNext and Typescript
* starter readme.md (to come) with installation instructions 
* basic travis.yml
* `spoonx.js` contains the various build options
* `gulpfile.js` contains express routes for the tests
* `gulp help` lists the available tasks

## Prerequisites:

Global gulp and jspm installation

`npm i -g gulp jspm`

## Guideline:
(to come)

### initially
* update package name in package.json, bower.json, typings.json
* update travis.yml and enable it in https://travis-ci.org/

#### after adding dependecies
* update spoonx.js, package.json, main.js imports
* prepare-release 
* fix/update package.json/bower.json
* update installation installations

### update spoonx.js, package.json, main.js imports for app bundling
* import all globalResources in the main file
* add those to spoonx.js `importsToAdd` and `jsResources`
* add those to package.json's' "aurelia.build.resources"
* add to "aurelia.build.resources" also all view.htmls without own view-model
* add internal imports eg `extend` to spoonx.js to `importsToIgnoreForDts`

## Installation guideline template

### Aurelia-Cli

Run `npm i aurelia-plugin-skeleton --save` from your project root.

Aurelia-plugin-skeleton makes use of `extend`. So, add following to the `build.bundles.dependencies` section of `aurelia-project/aurelia.json`.

```js
"dependencies": [
  // ...
  "extend",
  {
    "name": "aurelia-plugin-skeleton",
    "path": "../node_modules/aurelia-plugin-skeleton/dist/amd",
    "main": "aurelia-plugin-skeleton",
    "resources": [
      "component/**/*.html"
    ]
  },
  // ...
],
```

### Jspm

Run `jspm i aurelia-plugin-skeleton` from your project root.

Add following to the desired `includes` section of `build/bundles.js`, eg:

```js
"aurelia": {
  "includes": [
    //...
    "aurelia-plugin-skeleton",
    "[aurelia-plugin-skeleton/**/*.js]",
    "aurelia-plugin-skeleton/**/*.html!text",
    //...
  ]
}
```

If the installation results in having forks, try resolving them by running:

```sh
jspm inspect --forks
jspm resolve --only registry:package-name@version
```

### Webpack

Run `npm i aurelia-plugin-skeleton --save` from your project root.

And add `aurelia-plugin-skeleton` in the `coreBundles.aurelia` section of your `webpack.config.js`.

### Typescript

Npm-based installations pick up the typings automatically. For Jspm-based installations, run `typings i github:spoonx/aurelia-plugin-skeleton` or add `"aurelia-plugin-skeleton": "github:spoonx/aurelia-plugin-skeleton",` to your `typings.json` and run `typings i`.
