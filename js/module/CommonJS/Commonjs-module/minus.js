
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