
const gulp = require('gulp');
// 1. 处理html
gulp.task('html', function () {
  return gulp.src('./*.html')
    .pipe(gulp.dest('./dist'));
});

// 2. 处理图片
gulp.task('images', function () {
  return gulp.src('./images/**/*')
    .pipe(gulp.dest('./dist/images'));
});


// 3. 处理css [转成css prefix 压缩 重命名] [gulp-sass gulp-autoprefixer gulp-cssmin gulp-rename]
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('css', function () {
  return gulp.src('./css/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass', function () {
  return gulp.src('./css/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/css'));
});


// 4. 处理js [转成es5 合并 压缩][gulp-babel gulp-concat gulp-uglify]
// npm install gulp-babel@7.0.1 babel-core babel-preset-es2015 --save
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('js', function () {
  return gulp.src('./js/*.js')
    .pipe(babel())
    // .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/js'));
});

// 4.1 lib文件夹移动一下
gulp.task('lib', function () {
  return gulp.src('./lib/**/*')
    .pipe(gulp.dest('./dist/lib'));
});


// 5. 联网 [gulp-webserver]
const webserver = require('gulp-webserver');
gulp.task('webserver', function () {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});


// 6. watch任务
gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./images/**/*'], ['images']);
  gulp.watch(['./css/*.css'], ['css']);
  gulp.watch(['./css/sass/*.scss'], ['sass']);
  gulp.watch(['./js/*.js'], ['js']);
  gulp.watch(['./lib/**/*'], ['lib']);
});


// 7. 初始化执行多个任务
gulp.task('all', ['html', 'images', 'css', 'sass', 'js', 'lib'], function () {
  console.log('all');
});


// 8. 默认任务执行watch和webserver
gulp.task('default', ['watch', 'webserver'], function () {
  console.log('default');
});



