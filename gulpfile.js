const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

module.exports = gulp.task('default', function () {
    return gulp.src('./ui-grid.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['./node_modules']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'));
});