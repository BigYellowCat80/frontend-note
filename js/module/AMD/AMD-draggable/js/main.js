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