'use strict';

require.config({
  paths: {
    'init': 'init.min',
    'jquery': '../lib/jquery-1.11.3.min',
    'jqueryUI': '../lib/jquery-ui-1.12.1/jquery-ui.min'
  },
  shim: {
    'jqueryUI': ['jquery'],
    'init': ['jqueryUI'],
  }
});

require(['init', 'jquery'], function (init, $) {

  $(function () {
    init.init();
    init.getIndex();
  });
});