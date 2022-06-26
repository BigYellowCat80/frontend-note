

define(['jquery', 'jqueryUI'], function ($) {
  function init() {
    $('.box').draggable();
  }

  let add = (a, b) => a + b;

  function getIndex() {
    var lis = Array.from(document.querySelectorAll('ul>li'));
    for (let i = 0; i < lis.length; i++) {
      lis[i].onclick = function () {
        console.log(i);
      }
    }
  }
  return {
    init,
    add,
    getIndex,
  };
});