
// 1. 配置路径和依赖关系
require.config({
  paths: {
    'init': 'init.min',
    'jquery': '../lib/jquery-1.11.3.min',
    'jqueryUI': '../lib/jquery-ui-1.12.1/jquery-ui.min',
  },
  shim: {
    'jqueryUI': ['jquery'],
    'init': ['jqueryUI'],
  }
});


// 2. 引入使用
require(['init', 'jquery'], function (init, $) {
  $(function () {
    init.init();
  });
});