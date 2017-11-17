# UI Grid SASS

[![GitHub package version](https://img.shields.io/github/package-json/v/badges/shields.svg)](https://github.com/cutterbl/ui-grid-sass.git)

Currently the [Angular UI Grid](https://github.com/angular-ui/ui-grid) source files only support LESS for stylesheets.
This project exists for those who prefer to use SASS with their projects, porting the
current LESS to SASS.

## Usage
- `npm install ui-grid-sass` or (preferred) `yarn add ui-grid-sass`
- In your SASS code
    - `@import "your/custom/variables/file";`
    - `@import "node_modules/ui-grid-sass/src/main";`

## Dependencies
UI Grid SASS uses Bootstrap for styling, and Font Awesome for various icons, so your application must include those
libraries and their dependencies. Both (bootstrap-sass and font-awesome) are active dependencies of this project, and
will automatically be available in `node_modules` once the package is installed.