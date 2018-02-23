const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

module.exports = gulp.task('default', function () {
    return gulp.src('./ui-grid.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['./node_modules']
        }).on('error', sass.logError))
        .pipe(postcss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'));
});