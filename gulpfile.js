var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  jshintReporter = require('jshint-stylish'),
  watch = require('gulp-watch'),

// =========================================
// browsersync
  nodemon = require('gulp-nodemon'),
  browserSync = require('browser-sync'),
  less = require('gulp-less'),
  reload = browserSync.reload;
// =========================================


/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
  'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']
};

// // gulp lint
gulp.task('lint', function(){
  gulp.src(paths.src)
    .pipe(jshint())
    .pipe(jshint.reporter(jshintReporter));

});

// // gulp watcher for lint
gulp.task('watch:lint', function () {
  gulp.src(paths.src)
    .pipe(watch())
    .pipe(jshint())
    .pipe(jshint.reporter(jshintReporter));
});
//
// BrowserSync
// ========================================
//
// uncomment
//
// accordian.less & layout.less | @import "public/bootstrap/bootstrap.less";
//
//
// Compile less into CSS & auto-inject into browsers
gulp.task('less', function() {
    return gulp.src("./public/css/**/*.less")
        .pipe(less({ errLogToConsole: true }))
        .pipe(gulp.dest("./public/css/browsersync"))
        .pipe(reload({ stream: true }));
});

gulp.task('serve', ['less'], function() {

    gulp.watch("./public/css/**/*.less", ['less']);
    gulp.watch("./templates/**/*.hbs").on('change', reload);
});

gulp.task('browserSync', function() {
  browserSync({
    proxy: "localhost:3000",
    port: 3002
  });
});

gulp.task('default', ['serve', 'less', 'browserSync']);

// ========================================