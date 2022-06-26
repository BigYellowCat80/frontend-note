
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