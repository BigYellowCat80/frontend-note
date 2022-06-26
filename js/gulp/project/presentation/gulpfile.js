

const gulp = require('gulp');


// 1. 创建任务hello
gulp.task('hello', function () {
  console.log('hello world');
});


// 2. 创建copy-html任务 把所有html文件都放在dist文件夹
gulp.task('copy-html', function () {
  return gulp.src('./*.html')
    .pipe(gulp.dest('dist'));
});


// 3. 创建copy-images任务 都所有图片都放在images文件夹

// 3.1 只复制jpg图片
gulp.task('copy-images-jpg', function () {
  return gulp.src('./images/*.jpg')
    .pipe(gulp.dest('dist/images'));
});

// 3.2 只复制jpg和png图片
gulp.task('copy-images-jpg-and-png', function () {
  return gulp.src('./images/*.{jpg,png}')
    .pipe(gulp.dest('dist/images'));
});

// 3.3 只复制所有文件夹及里面的图片
gulp.task('copy-all-folders', function () {
  return gulp.src('./images/*/*')
    .pipe(gulp.dest('dist/images'));
});

// 3.4 所有文件夹及当前图片都复制
gulp.task('copy-folders-and-images', function () {
  return gulp.src('./images/**/*')
    .pipe(gulp.dest('dist/images'));
});


// 4. 筛选复制 图片及图片文件夹都要 除了footer文件夹里的png图片
gulp.task('copy-with-condition', function () {
  return gulp.src(['images/**/*', '!images/footer/*.png'])
    .pipe(gulp.dest('dist/images'));
});


// 5. 一次执行多个或者所有任务(异步执行 执行速度快)
gulp.task('all', ['hello', 'copy-html', 'copy-folders-and-images', 'sass', 'js'], function () {
  console.log('ok');
});


// 6. 监听 为什么需要监听？因为如果index.html里面的代码改了 在dist文件夹里的index.html得实时更新才行
gulp.task('watch', function () {
  // gulp.watch([任务路径], [任务名]);
  gulp.watch(['./*.html'], ['copy-html']); // 两个参数其他都是数组也行
  gulp.watch(['images/**/*', '!images/footer/*.png'], ['copy-with-condition']); // 这里其实可以做到增加文件同时增加 当时删除文件不会同时删除
  gulp.watch(['./sass/*.scss'], ['sass']);
  gulp.watch(['./js/*.js'], ['js']);
});


// 7.gulp插件的使用 https://gulpjs.com/plugins/
// 使用步骤 [下载, 引入, 看文档使用]
// [npm install 插件名字 --save-dev, const x = require('x'), ...]


// 7.1 gulp插件 - [gulp-sass, gulp-autoprefixer, gulp-cssmin, gulp-rename]
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(cssmin())
    .pipe(rename({
      suffix: ".min",
    }))
    .pipe(gulp.dest('./dist/css'));
});


// 7.2 gulp插件 - [gulp-babel, gulp-concat, gulp-uglify]
const babel = require('gulp-babel'); // npm install gulp-babel@7.0.1 babel-core babel-preset-es2015 --save
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('js', function () {
  return gulp.src('./js/*.js')

    .pipe(concat('utils.js')) // 两个文件合并压缩并命名为utils.js
    .pipe(babel())
    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify()) // 压缩
    .pipe(rename({ suffix: '.min' })) // 重命名
    .pipe(gulp.dest('./dist/js'));
});


// 7.3 gulp插件 - 临时服务器 [gulp-livereload]
// https://www.npmjs.com/package/gulp-livereload

const webserver = require('gulp-webserver');
gulp.task('webserver', function () {
  gulp.src('dist/')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


// 8. 默认任务
gulp.task('default', ['watch', 'webserver'], function () {
  console.log('default');
});







