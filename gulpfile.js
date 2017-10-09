const gulp = require('gulp');
const ugfily = require('gulp-uglify');
const css = require('gulp-minify-css');

gulp.task('compress', function () {
    gulp.src('./qc.js').pipe(ugfily()).pipe(gulp.dest('lib'));
});

gulp.task('css', function () {
    gulp.src('./style.css').pipe(css()).pipe(gulp.dest('css'));
});