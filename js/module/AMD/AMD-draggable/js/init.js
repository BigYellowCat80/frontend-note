

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