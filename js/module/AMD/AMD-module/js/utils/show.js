

// 2. 由于定义时用到了kimi模块 因此要设置路径
require.config({
  paths: {
    'kimi': './utils/kimi/kimi'
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

