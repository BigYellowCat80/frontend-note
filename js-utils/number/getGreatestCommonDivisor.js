// 最大公约数
const getGreatestCommonDivisor = (n1, n2) => {
  const min = Math.min(n1, n2)
  for (let i = min; i >= 1; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i
    }
  }
}

console.log(getGreatestCommonDivisor(2, 8)) // 2
