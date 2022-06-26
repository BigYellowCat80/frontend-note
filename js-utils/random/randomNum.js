// min and max both are integer
function randomNum(min = 0, max = 0) {
  return parseInt(Math.random() * (max - min) + min)
}

console.log(randomNum(10, 20))
