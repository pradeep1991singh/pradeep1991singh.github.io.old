var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var inject = require('gulp-inject');
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');
var runSequence = require('run-sequence');

var appBaseUrl = 'http://localhost:8000/example/index.html';

gulp.task('copy', function() {
  gulp.src(['./src/fonts/**/*']).pipe(gulp.dest('dist/fonts'));
});

gulp.task('less', function() {
  return gulp
    .src('./src/less/**/[^_]*.less')
    .pipe(
      less({
        paths: [path.join(__dirname, 'less', 'includes')]
      })
    )
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('less:watch', function() {
  gulp.watch('./src/less/**/*.less', ['less']);
});

gulp.task('inject', function() {
  var target = gulp.src('./example/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./dist/**/*.css', './dist/**/*.js'], {
    read: false
  });
  return target.pipe(inject(sources)).pipe(gulp.dest('./example'));
});

gulp.task('webserver', function() {
  gulp.src('.').pipe(
    webserver({
      livereload: true,
      directoryListing: true,
      open: appBaseUrl
    })
  );
});

gulp.task('default', function() {
  runSequence('serve');
});

gulp.task('serve', function() {
  runSequence('copy', 'less', 'inject', 'webserver', 'less:watch');
});

gulp.task('prod', function() {
  runSequence('copy', 'less', 'inject');
});
