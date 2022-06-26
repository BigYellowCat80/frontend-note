## gulp插件将ES6转成ES5


> https://blog.csdn.net/qq_24991841/article/details/84259281


### 1. 安装gulp-babel及其依赖
```javascript
npm install gulp-babel@7.0.1 babel-core babel-preset-es2015 --save-dev

注：gulp-babel版本不能超过8.0.0 否则会error
```


### 2. 编写任务转化
```javascript
gulp.task('es6',  () => {
  return gulp.src('./js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'));
});
```


### 3. 根目录创建.babelrc文件
```javascript
{
  "presets": ["es2015"]
}
```