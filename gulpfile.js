const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");

sass.compiler = require("node-sass");

exports.default = function() {
  return src("./ui-grid.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: ["./node_modules"]
      }).on("error", sass.logError)
    )
    .pipe(postcss())
    .pipe(sourcemaps.write())
    .pipe(dest("./dist"));
};

/*module.exports = gulp.task('default', function () {
    return gulp.src('./ui-grid.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['./node_modules']
        }).on('error', sass.logError))
        .pipe(postcss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'));
});*/
