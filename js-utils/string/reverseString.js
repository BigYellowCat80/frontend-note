// method 1
const reverseString = (str) => {
  return str.split("").reverse().join("")
}

// mehtod 2 新增数组一个一个放入
// const reverseString = (str) => {
//   const arr = []
//   for (let item of str) {
//     arr.unshift(item)
//   }
//   return arr.join("")
// }

// mehtod 3 转成数组两边交换
// const reverseString = (str) => {
//   const arr = str.split("")
//   const length = arr.length
//   const until = parseInt(length / 2)

//   for (let i = 0; i < until; i++) {
//     ;[arr[i], arr[length - 1 - i]] = [arr[length - 1 - i], arr[i]]
//   }
//   return arr.join("")
// }

console.log(reverseString("dlrow olleh"))
