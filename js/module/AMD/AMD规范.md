## AMD规范


### 1. html中先写好入口文件
```javascript
<script src="./lib/require.js" async defer data-main='js/main.js'></script>

async表示引入的所有JS文件都是异步加载
IE下不兼容async 因此要加上defer
data-main 设置入口文件 管理当前html页面的所有JS代码 引入的JS文件的后缀.js可以省略
```


### 2. 
```javascript
2.1 顶部可以先写console.log('main.js loaded');测试下是否引入成功

2.2 先配置路径
require.config({
  paths: {
    'math': './utils/math',
    'show': './utils/show',
    'jquery': '../lib/jquery-1.11.3.min'
  }
});

2.3 引入需要的模块
require(['math', 'show', 'jquery'], function (math, show, $) {
  console.log(math.add());
  console.log(show.sayHello());

  $('.box').on('click', function () { // 这里jquery模块直接就可以用了
    alert($(this).text());
  })
});
```


### 3. math模块定义
```javascript
define(function () {
  function minus() {
    let x = 100;
    return x;
  }

  function add() {
    return minus() - 80;
  }

  return {
    minus,
    add
  }
});
```


### 4. 定义show模块
```javascript
// 2. 由于定义时用到了kimi模块 因此要设置路径 math模块由于同一路径不用设置
require.config({
  paths: {
    'kimi': './utils/kimi/kimi' // 亲测这样写才行 那就是以main.js为基准写的路径 其实全部一开头写在main.js中更好
  }
});


// 1. 定义
define(['math', 'kimi'], function (math, kimi) {

  function sayHello() {
    console.log(kimi.kimi());
    return math.add() + ' is saying hello';
  }

  return {
    sayHello,
  }
});

```


### 5. 定义kimi模块
```javascript
define(function () {
  function kimi() {
    return 'kimi is a pig';
  }

  return {
    kimi,
  }
});
```


### 额外
```javascript
如果引入的插件依赖于jquery 要先确保引入jquery
console.log('main.js loaded');

require.config({
  paths: {
    'jquery': '../lib/jquery-1.11.3.min',
    'jqueryUI': '../lib/jquery-ui-1.12.1/jquery-ui',
    'init': 'init'
  },
  shim: {
    'jqueryUI': ['jquery'],
    'init': ['jqueryUI']
  }
});

require(['init'], function (init) {
  init.init();
});


init.js中
define(['jquery', 'jqueryUI'], function ($) {
  function init() {
    $('.box').draggable({
      containment: 'document'
    });
  }

  return {
    init,
  }
});
```