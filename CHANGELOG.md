## CHANGE LOG

#### 24 May, 2019
Updates for UI-Grid 4.8.0

Split source across directories for the root, core and features (similar to how UI-Grid has done it)

Replaced Gulp build process for pure command line node-sass/postcss mix

Updated dependencies (and added resolutions (Yarn only)) for security reasons
- Bootstrap-SASS@3.4.1 (guess it wasn't final)

#### 16 October, 2018
Updates to UI-Grid 4.6.3

Changing versioning to match with UI-Grid versioning

#### 23 February, 2018
Breaking changes. Completely removes the Bootstrap and Font Awesome code from
the compiled output. Solidifies styling based upon styles provided in:
- Boostrap-SASS@3.3.7 (final)
- Font-Awesome@4.7.0

Both of these dependencies are the final versions in those major releases, as the next
major release of each are complete rewrites of their respective libraries, and UI-Grid 
for AngularJS (1.x) is written for these versions.