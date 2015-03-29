var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass( { errLogToConsole: true }))
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('serve', ['sass'], function() {
  browserSync({
    proxy: "localhost:3000"
  });

  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/**/*').on('change', reload);
  gulp.watch('./server/views/**/*.jade').on('change', reload);
});

gulp.task('default', ['serve', 'sass']);