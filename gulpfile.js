var gulp = require('gulp');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');

gulp.task('basswork', function() {
  gulp.src('./css/src/all.css')
    .pipe(basswork())
    .pipe(rename('c.css'))
    .pipe(gulp.dest('./css'))
});

gulp.task('default', ['basswork']);
