## gulpfile怎么写


### 注意事项
```
1. 遵循Commonjs规范
2. 只能写ECMA的语法 不能写DOM和BOM的语法 比如alert();
```


### 1. 先引入gulp
```javascript
const gulp = require("gulp");
```


### 2. 创建任务通过gulp.task(taskName, callback);
```javascript
gulp.task('hello', function () {
  console.log('hello world');
});
```


### 3. 详情参考'./project/practice/gulpfile.js'