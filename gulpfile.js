var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('gulp-cssnano');
var serve = require('gulp-serve');

var gulpWatchList = ['templates/*jade', 'templates/**/*.jade', 'css/*.scss', 'css/partials/*.scss', 'js/*.js', 'js/**/*.js'];

gulp.task('templates', function() {
  return gulp.src('templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  var processors = [
    autoprefixer,
    cssnano
  ];
  return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
  return gulp.src('img/*.*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('main', function() {
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
  .pipe(jade())
  .pipe(gulp.dest('dist/js/directives'));
});

gulp.task('static', ['templates', 'styles', 'images']);

gulp.task('directives', ['directives-js', 'directives-jade']);

gulp.task('app', ['main', 'controllers', 'directives']);

gulp.task('build', ['static', 'app']);

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
