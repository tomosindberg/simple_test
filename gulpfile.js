var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulp-mocha');
var watch = require('gulp-watch');
 //changes showed up in ./bin/gulpfile.js

gulp.task('jshint', function(){
  return gulp.src(['index.js', 'bin/greet', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('test', function(){  //mocha/chai ./test/great_test.js
  return gulp.src('test/**/*test.js')
    .pipe(watch(['index.js', 'bin/greet', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js']))
    .pipe(gulpMocha({reporter: 'nyan'}));
});

gulp.task('stream', function(){  //copies files to ./build folder
  return gulp.src(['index.js', 'bin/greet', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js'])
    .pipe(watch(['index.js', 'bin/greet', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js']))
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['jshint', 'test', 'stream']);


