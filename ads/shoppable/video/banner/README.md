
#  Vertical Shoppable Unit (Static) AdBanner

![](https://img.shields.io/badge/job_number-19052819IB1_ADS-brightgreen.svg) ![](https://img.shields.io/badge/liscense-MIT-brightgreen.svg) ![](https://img.shields.io/badge/type-AdBanner-red.svg) ![](https://img.shields.io/badge/framework-HTML5-orange.svg) ![](https://img.shields.io/badge/task_runner-Parcel-orange.svg)

### Contents
- [Installation](#install)
- [Usage](#usage)
- [Structure](#structure)
- [Testing](#testing)
- [Documentation](#documentation)
- [Maintainers](#maintainers)
- [Contributers](#contributers)
- [Related Projects](#related-projects)

# Installation

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
# Install Node.
$ brew install node  (OSX)
$ sudo apt update && sudo apt install nodejs npm (Linux)

# Check versions
$ node --version
$ npm --version

# Install all dependencies.
$ npm i

# First run.
$ npm run build:dev

```

<br/><br/>

# Usage

An exampe of a generalized development flow.

```sh
# Run development server.
$ npm run build:dev

# Create QA build (for external migration).
$ npm run build:qa

# Create PROD build (for produciton migration).
$ npm run build:prod

# Run unit tests. Uses Jest as testing framework.
$ npm run test:unit

# Generate documentation.
$ npm run docs:make

# Open documentation.
$ npm run docs:open
```

<br/><br/>

# Structure

Project file structure listed below.

```sh
| README.md
| .babelrc
| .eslintrc
| .eslintres
| .gitignore
| .jsdocrc
| .postcssrc
| .posthtmlrc
| package.json
| faq.html
| index.html
| node_modules
└─── assets
  └─── media
    └─── images
└─── scripts
  └─── data
    └─── hotspots.json
  └─── layouts
    └─── app.js
  └─── modules
    └─── shopHotspot.js
    └─── shopPanel.js
  └─── states
    └─── state.global.js
└─── styles
  └─── app.scss
  └─── animation.scss
  └─── extends.scss
  └─── mixins.scss
  └─── vars.scss
```

<br/><br/>

# Testing

This project uses [Jest](https://jestjs.io/) to create its documentation.

### Addons
  > [Sinon.js](https://sinonjs.org/) | Standalone test spies, stubs and mocks for JavaScript.
Works with any unit testing framework.

  > [Enzyme.js](https://airbnb.io/enzyme/) | Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

  > [Istanbul.js](https://istanbul.js.org/) | Istanbul instruments your ES5 and ES2015+ JavaScript code with line counters, so that you can track how well your unit-tests exercise your codebase.

<br/><br/>

# Documentation

This project uses [jsDoc](https://github.com/jsdoc/jsdoc) to create its documentation.

Documention is styled using the [minami](https://github.com/Nijikokun/minami) plugin.

---

### Guidelines

Within the JSON data file, the following must be present:

#### There must be a video object with the following properties:

- id: `{Integer} (Vimeo Video ID)`,
- params: `"?loop=1&autoplay=1&background=1&mute=0&quality=360p"`,
    - quality=240p
    - quality=360p
    - quality=480p
    - quality=720p
    - quality=1080p
- length: `{Integer}` `(Time in milliseconds)`

#### Each hotspot must have the following properties:

- isVisible: `{Boolean}`
- pulseRate: `{Integer}` `(Time in milliseconds)`
- id: `{String}`
- item: `{String}`
- image: `{String}` `(URL)`
- url: `{String}` `(URL)`
- polarity: `{String}` `('bot'|'top')`
- styles: `{Object}`
- meta: `{Object}`
- lifecycle: `{Array}` of `{Object}`s

#### The styles object must have the following properties:

- top: `{String}`
- left: `{String}`
- animation-duration: `{String}`
- background-image: `{String}` `(URL)`
- height: `{String}`
- width: `{String}`
- box-shadow: `{String}` `(CSS)`

#### The meta object must have the following properties:

- description: `{String}`
- brand: `{String}`
- price: `{String}`
- sale: `{Boolean}`

#### The lifecycle array must have objects with the following properties:
> The lifecycle series must begin with: {"inactive": 0}, and end with {"inactive": $length-of-video-in-ms},

- active: `{Integer}`
- inactive: `{Integer}`


<br/><br/>


# Maintainers
The list of maintainers for this project include:


 - [aareid10](https://github.com/aareid10)<br/><br/>

# Contributors
The list of contributors for this project include:


 - [aareid10](https://github.com/aareid10)<br/><br/>

# Contributing

This Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

<br/><br/>

# Related Projects
> The projects related to this one include:

 - [mcdonalds-vertical-unit](https://code.espn.com/creativeworks/mcdonalds)<br/><br/>
