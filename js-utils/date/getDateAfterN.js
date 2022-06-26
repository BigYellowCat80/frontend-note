// n天后是几号

function getDateAfterN(n) {
  const date = new Date()
  date.setDate(date.getDate() + n) // 超过月底自动进入下一月
  return date
}

console.log(getDateAfterN(1))
