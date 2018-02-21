# UI Grid SASS

Currently the [Angular UI Grid](https://github.com/angular-ui/ui-grid) source files only support LESS for stylesheets.
This project exists for those who prefer to use SASS with their projects, porting the
current LESS to SASS.

## Usage
- `npm install ui-grid-sass` or (preferred) `yarn add ui-grid-sass`
- In your SASS code
    - `@import "your/custom/variables/file";`
    - `@import "node_modules/ui-grid-sass/src/main";`

## Usage With Build Tools
You will want to include an `includePaths` statement in you build (gulp, webpack, etc) configs
that reference your `node_modules` directory.

## Dependencies
UI Grid SASS uses Bootstrap for styling, and Font Awesome for various icons, so your application must include those
libraries and their dependencies. Both (bootstrap-sass and font-awesome) are active dependencies of this project, and
will automatically be available in `node_modules` once the package is installed.