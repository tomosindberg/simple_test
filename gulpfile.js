var gulp = require('gulp');
var jshint = require('gulp-jshint');
// var gulpMocha = require('gulp-mocha');

gulp.task('jshint', function(){
  return gulp.src(['index.js', 'bin/greet', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('default', ['jshint']);
