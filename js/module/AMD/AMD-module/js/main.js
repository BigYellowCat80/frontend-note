console.log('main.js loaded');

// 1. 先配置路径
require.config({
  paths: {
    'math': './utils/math',
    'show': './utils/show',
    'jquery': '../lib/jquery-1.11.3.min'
  }
});


// 2. 引入需要依赖的模块
require(['math', 'show', 'jquery'], function (math, show, $) {
  console.log(math.add());
  console.log(show.sayHello());

  $('.box').on('click', function () {
    alert($(this).text());
  })
});