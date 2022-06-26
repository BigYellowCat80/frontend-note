// 不定参求和

function sum(...args) {
  return args.reduce((prev, next) => prev + next, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6)) // 21
