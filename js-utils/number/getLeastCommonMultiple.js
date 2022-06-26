// 最小公倍数

const getLeastCommonMultiple = (n1, n2) => {
  const max = Math.max(n1, n2)
  for (var i = max; i <= n1 * n2; i++) {
    if (i % n1 === 0 && i % n2 === 0) {
      return i
    }
  }
}

console.log(getLeastCommonMultiple(7, 8)) // 56
console.log(getLeastCommonMultiple(12, 8)) // 24
