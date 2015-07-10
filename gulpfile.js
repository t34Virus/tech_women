var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass( { errLogToConsole: true }))
    .pipe(gulp.dest('./public/styles'))
    .pipe(reload({ stream: true }));
});

gulp.task('serve', ['sass'], function() {

  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/**/*').on('change', reload);
  gulp.watch('./server/views/**/*.jade').on('change', reload);
});

gulp.task('browserSync', function() {
  browserSync({
    proxy: "localhost:3001"
  });
});

gulp.task('default', ['serve', 'sass', 'browserSync']);