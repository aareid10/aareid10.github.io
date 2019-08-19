# Genius | FullStack Take-Home Challenge
### Lyrica ![](https://img.shields.io/badge/version-1.0.0.-brightgreen.svg)

<br/>

# Instructions & Overview

> This project uses [node](http://nodejs.org) and [npm](https://npmjs.com).
> - This a component-based, object-oriented, web application leveraging:
>   - [React.js](https://reactjs.org)
>   - [Babel.js](https://babeljs.io)
>   - [TailwindCSS](https://tailwindcss.com)
>   - [PostCSS](https://postcss.org)
> - This project uses [Parcel.js](https://parceljs.org) as it's bundler/build framework.
> - To simulate 'real-world' usage, the dataset for this challenge is not loaded locally, but instead is served to the application via a CDN; [jsDelivr](https://www.jsdelivr.com) specifically.
> - Configuration variables, used to secure/obfuscate the data source, are stored within the '.env' file in the root directory.

---
<br/><br/>



# Installation

**Instructions for installing this project locally.**

```sh

# Install Node JS & Node JS Package Manger (NPM).
$ brew install node  (OSX)
$ sudo apt update && sudo apt install nodejs npm (Linux)

# Check versions
$ node --version
$ npm --version

# Open the source directory
$ cd fullStack_take-home_challenge

# Install all application dependencies.
$ npm i

# Install Parcel.js web application bundler.
$ npm i -g parcel@latest


```
<br/><br/>



# Usage

**Instructions for running this project locally.**

```sh

# Run local development server.
# This will run the web app in a web local server.
# The default port is 1234, i.e. 'http://localhost:1234'
$ npm run build:dev

# Then open http://localhost:1234 to interact with the web app.

# Note the 'Dot-Env' NPM module will throw a couple warnings, via the cmdline during the build process, due to a path resolution dispute between it and Parcel.js.

# This is NOT a syntax or runtime error——it will not stop or affect the build process.

# Once the build is ready and served via localhost, the console output will stop and there will be a build status message, i.e. 'Built in 21.96s' along with the active address for the web app on the local web sever.

# You can also create portable build (for external migration/hosting via the dist directory).
$ npm run build:qa

```
<br/><br/>



# Structure

**The project's file structure is listed below for reference.**

```sh

Documents
| SCALING CHALLENGES & SOLUTIONS.md  - Markdown version of response to the scaling prompt.
| SCALING CHALLENGES & SOLUTIONS.pdf - PDF version of response to the scaling prompt.
| INSTRUCTIONS.pdf - PDF version of the project instructions & overview.
| README.md - Markdown version of the project instructions & overview.
| TASKS.md - Analysis and notes about the challenge.
| OUTPUT.txt - Web application data output.

Source Code
| .env
| .babelrc
| .eslintrc
| .eslintres
| .gitignore
| .postcssrc
| package.json
| index.html
| node_modules
└─── assets
└─── scripts
  └─── lib.lyrica.js
  └─── app.js
  └─── components
    └─── Display.jsx
  └─── classes
    └─── lyricalprofiler.js
    └─── lyricalParser.js
    └─── lyricalAnalyser.js
└─── styles
  └─── app.scss
  └─── animation.scss
  └─── extends.scss
  └─── mixins.scss
  └─── vars.scss
```
<br/><br/>
