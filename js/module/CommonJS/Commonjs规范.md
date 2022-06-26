## Commonjs规范（CMD窗口 node + 文件名运行）


```javascript
minus.js中导出
function funA() {
  let x = 100;
  return x;
}

function funB() {
  return funA() - 80;
}

module.exports = {
  funA,
  funB,
}


add.js中导入minus.js 并导出本身
const minus = require('./minus.js');

console.log(minus.funB()); // 20

function funC() {
  return minus.funB() + minus.funB();
}

module.exports = {
  funC,
}


result.js中导入add.js
const add = require('./add.js');

console.log(add.funC());
```