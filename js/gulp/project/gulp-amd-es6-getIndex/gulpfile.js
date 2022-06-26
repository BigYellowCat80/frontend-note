

const gulp = require('gulp');

// 1. 处理静态文件 [html images lib]
gulp.task('html', function () {
  return gulp.src('*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('images/**/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('lib', function () {
  return gulp.src('lib/**/*')
    .pipe(gulp.dest('dist/lib'));
});


// 2. 处理css文件 包括scss文件 [gulp-sass gulp-autoprefixer gulp-cssmin gulp-rename]
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('sass', function () {
  return gulp.src('css/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
});


// 3. 处理js文件
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('js', function () {
  return gulp.src('js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
});


// 4. watch任务
gulp.task('watch', function () {
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['images/**/*'], ['images']);
  gulp.watch(['lib/**/*'], ['lib']);
  gulp.watch(['css/*.css'], ['css']);
  gulp.watch(['css/sass/*.scss'], ['sass']);
  gulp.watch(['js/*.js'], ['js']);
});


// 5. build任务
gulp.task('build', ['html', 'images', 'lib', 'css', 'sass', 'js'], function () {
  console.log('build');
});


// 6. webserver
const webserver = require('gulp-webserver');

gulp.task('webserver', function () {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});


// 7. 默认任务
gulp.task('default', ['watch', 'webserver'], function () {
  console.log('default');
})