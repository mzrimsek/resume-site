var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssano = require('gulp-cssnano');
var serve = require('gulp-serve');

var gulpWatchList = ['templates/*jade', 'templates/**/*.jade', 'css/*.scss', 'js/*.js', 'js/**/*.js'];

gulp.task('templates', function() {
  return gulp.src('templates/*.jade')
    .pipe(jade({'pretty':true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('dist'));
});

gulp.task('app', function() {
  return gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('controllers', function() {
  return gulp.src('js/controllers/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/controllers'));
});

gulp.task('directives-js', function() {
  return gulp.src('js/directives/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/directives'));
});

gulp.task('directives-jade', function() {
  return gulp.src('templates/directives/*.jade')
  .pipe(jade({'pretty':true}))
  .pipe(gulp.dest('dist/js/directives'));
});

gulp.task('directives', ['directives-js', 'directives-jade']);

gulp.task('build', ['templates', 'styles', 'app', 'controllers', 'directives']);

gulp.task('default', ['build'], function() {
  gulp.watch(
    gulpWatchList, ['build']
  );
});

gulp.task('watch', function() {
  gulp.watch(gulpWatchList, ['build']);
});

gulp.task('serve', ['build', 'watch'], serve({
  root: ['dist'],
  port: 3000
}));
