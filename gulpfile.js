// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(cb) {
  gulp
    .src('**/index.scss')
    .pipe(sass())
    .pipe(
      gulp.dest("style/")
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('**/*.scss', gulp.series('sass'));
    cb();
  })
);