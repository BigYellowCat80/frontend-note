function randomNum() {
  return parseInt(Math.random() * 256)
}

function randomRgb() {
  return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
}

console.log(randomRgb())
