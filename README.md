[![Built with pwa–starter–kit–plus](https://img.shields.io/badge/built_with-pwa–starter–kit–plus_-blue.svg)](https://github.com/StartPolymer/pwa-starter-kit-plus 'Built with pwa–starter–kit–plus')
[![Build status](https://api.travis-ci.org/StartPolymer/pwa-starter-kit-plus.svg?branch=master)](https://travis-ci.org/StartPolymer/pwa-starter-kit-plus)

> ## 🛠 Status: In Development
>
> PWA Starter Kit is currently in development. It's on the fast track to a 1.0 release, so we encourage you to use it and give us your feedback, but there are things that haven't been finalized yet and you can expect some changes.
>
> See the list of Known Issues and TODOs, below, for updates.

# PWA Starter Kit Plus

This sample app is a starting point for building PWAs. Out of the box, the template
gives you the following features:

* all the PWA goodness (manifest, service worker)
* a responsive layout
* application theming
* example of using Redux for state management
* offline UI
* simple routing solution
* fast time-to-interactive and first-paint through the PRPL pattern
* easy deployment to prpl-server or static hosting
* unit and integrating testing starting points
* documentation about other advanced patterns.

## New features

* [EditorConfig](http://editorconfig.org) for define consistent coding styles between different editors. Atom and VS Code need to install a plugin.
* [ESLint](https://eslint.org) is linting utility for JavaScript.
* [Prettier](https://github.com/prettier/prettier) is an opinionated code formatter for enforces a consistent style.

### 📖Head over to the [wiki](https://github.com/PolymerLabs/pwa-starter-kit/wiki) for more details!

![pwa-starter-kit screenshot](https://user-images.githubusercontent.com/1369170/39715580-a1be5126-51e2-11e8-8440-96b07be03a3c.png)

## Known issues

These are high priority and currently being worked on, and they will all be fixed before the 1.0 release:

* lit-element and lit-html have IE11 compatibility issues
* if you have node version 10, you might have problems running the unit tests (and you will get an error along the lines of `Cannot read property '1' of null`. For now, we recommend using node 8 or 9.

## TODOs

* [x] setup Safari testing on Travis
* [ ] update to latest [material-design-web-components](https://github.com/material-components/material-components-web-components)
* [x] deploy all templates as demos
