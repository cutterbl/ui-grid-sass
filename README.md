# UI Grid SASS

Currently the [Angular UI Grid](https://github.com/angular-ui/ui-grid) source files only support LESS for stylesheets.
This project exists for those who prefer to use SASS with their projects, porting the
current LESS to SASS.

## Usage
- `npm install ui-grid-sass` or (preferred) `yarn add ui-grid-sass`
- In your SASS code
    - `@import "your/custom/variables/file";`
    - `@import "~ui-grid-sass/src/main";`

(Your SASS compiler may not support the `~`, for pointing to `node_modules`. If you run into this issue, Google is your friend.)

The `_main.scss` file includes all pieces of UI-Grid CSS. For granular control you may include the `src/core/main` file, and any `feature` files you might require from the `features` directory. This allows you to tailor UI-Grid's CSS to include only the features your application uses.

## Usage With Build Tools
You will want to include an `includePaths` statement in your build (gulp, webpack, etc) configs
that reference your `node_modules` directory. (This handles that `~` referenced above. Webpack sass-loader handles this automatically.)

## Dependencies
UI Grid SASS uses Bootstrap (3.4.1) for styling, and Font Awesome (4.7.0) for various icons, so your application must include those
libraries and their dependencies. Both (Bootstrap-SASS and Font-Awesome) are active dependencies of this project, and
will automatically be available in `node_modules` once the package is installed.

## Possible Breaking Changes
See the [CHANGELOG](CHANGELOG.md) for more information.