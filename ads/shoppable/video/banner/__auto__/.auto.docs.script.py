# -*- coding: utf-8 -*-
#!/usr/bin/python

import sys
import getpass
from difflib import SequenceMatcher


#####################
#                   #
#     BASE FILES    #
#                   #
#####################


#####################
# Base: Intro
#####################
base_intro = """
#  #NAME# #TYPE#

![](https://img.shields.io/badge/job_number-#ID#-brightgreen.svg) ![](https://img.shields.io/badge/liscense-#LISC#-brightgreen.svg) ![](https://img.shields.io/badge/type-#TYPE#-red.svg) ![](https://img.shields.io/badge/framework-#FRAME#-orange.svg) ![](https://img.shields.io/badge/task_runner-#RUNNER#-orange.svg)

### Contents
- [Installation](#install)
- [Usage](#usage)
- [Structure](#structure)
- [Testing](#testing)
- [Documentation](#documentation)
- [Maintainers](#maintainers)
- [Contributers](#contributers)
- [Related Projects](#related-projects)
"""


#####################
# Base: Install
#####################
base_install = """
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
"""


#####################
# Base: Usage
#####################
base_usage = """
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
"""


#####################
# Base: Structure
#####################
base_structure = """
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
"""


##########################
# Base: Related Projects #
##########################
base_related_projects = """
# Related Projects
> The projects related to this one include:
"""


##########################
# Base: Testing          #
##########################
base_testing = """
# Testing

This project uses [Jest](https://jestjs.io/) to create its documentation.

### Addons
  > [Sinon.js](https://sinonjs.org/) | Standalone test spies, stubs and mocks for JavaScript.
Works with any unit testing framework.

  > [Enzyme.js](https://airbnb.io/enzyme/) | Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

  > [Istanbul.js](https://istanbul.js.org/) | Istanbul instruments your ES5 and ES2015+ JavaScript code with line counters, so that you can track how well your unit-tests exercise your codebase.

<br/><br/>
"""


##########################
# Base: Documentation    #
##########################
base_documentation = """
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

"""

#####################
# Base: Maintainers #
#####################
base_maintainers = """
# Maintainers
The list of maintainers for this project include:

"""


#####################
# Base: Contributors
#####################
base_contributors = """
# Contributors
The list of contributors for this project include:

"""


######################
# Base: Contributing #
######################
base_contributing = """
# Contributing

This Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

<br/><br/>
"""











####################################################################################
############################        GEN.README.PY       ############################
############################                            ############################

def similar(a, b):
    return SequenceMatcher(None, a, b).ratio()

with open(sys.argv[1], 'r') if len(sys.argv) > 1 else sys.stdin as f:

    if len(sys.argv) == 1: print ("\n\nWhat is this project's liscense?: ")
    project_lisc = f.readline().rstrip()

    if len(sys.argv) == 1: print ("What is this project ID?: ")
    project_id = f.readline().rstrip()

    if len(sys.argv) == 1: print ("What is this project's name?: ")
    project_name = f.readline().rstrip()

    if len(sys.argv) == 1: print ("What is this project's type?:")
    project_type = f.readline().rstrip()

    while True:
        if len(sys.argv) == 1: print ("What is this project's framework?: [React, Preact, HBS, EJS, 'HTML5']: ")
        project_framework = f.readline().rstrip()
        if project_framework in ['React','Preact','HBS','EJS', 'HTML5']:
            break

    while True:
        if len(sys.argv) == 1: print ("What is this project's task runner?: [Next, Webpack, Parcel, Gulp]: ")
        project_runner = f.readline().rstrip()
        if project_runner in ['Next', 'Webpack', 'Parcel', 'Gulp']:
            break

    if len(sys.argv) == 1: print ("Related projects (array)?: ")
    project_related = f.readline().rstrip()

    if len(sys.argv) == 1: print ("Maintainers (array)?: ")
    project_maintainers = f.readline().rstrip()

    if len(sys.argv) == 1: print ("Contributers (array)?: ")
    project_contributers = f.readline().rstrip()

    print """\n
        Project config data:
        project_lisc: {0},
        project_id: {1},
        project_name: {2},
        project_framework {3}
        project_task_runner {4}
        project_related {5}
        project_maintainers {6}
        project_contributers {7}
    """.format(
                project_lisc,
                project_id,
                project_name,
                project_framework,
                project_runner,
                project_related,
                project_maintainers,
                project_contributers
            )


    # Base Intro #
    base_intro = base_intro.replace('#LISC#', project_lisc)
    base_intro = base_intro.replace('#ID#', project_id)
    base_intro = base_intro.replace('#NAME#', project_name)
    base_intro = base_intro.replace('#TYPE#', project_type)
    base_intro = base_intro.replace('#FRAME#', project_framework)
    base_intro = base_intro.replace('#RUNNER#', project_runner)


    # Base Related #
    project_related = project_related.split()
    for related in project_related:
        base_related_projects = base_related_projects + "\n - " + related
    base_related_projects = base_related_projects + "<br/><br/>\n"


    # Base Maintainer #
    project_maintainers = project_maintainers.split()
    for maintainer in project_maintainers:
        base_maintainers = base_maintainers + "\n - " + maintainer
    base_maintainers = base_maintainers + "<br/><br/>\n"


    # Base Contributor #
    project_contributers = project_contributers.split()
    for contributor in project_contributers:
        base_contributors = base_contributors + "\n - " + contributor
    base_contributors = base_contributors + "<br/><br/>\n"


    # Base Body #
    base_body = (
        base_install
        + base_usage
        + base_structure
        + base_testing
        + base_documentation
        + base_maintainers
        + base_contributors
        + base_contributing
        + base_related_projects
    )


    # Write to file #
    print "\nProject data written to file: README.md\n"
    readme = open("README.md", "w")
    readme.write(base_intro + base_body)
    readme.close()
