


const minus = require('./minus.js');

console.log(minus.funB()); // 20

function funC() {
  return minus.funB() + minus.funB();
}

module.exports = {
  funC,
}