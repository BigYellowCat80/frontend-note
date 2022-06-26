// 思路；获取两个日期的毫秒数/1000/3600/24

// 传入的日期格式为2020-12-20或2020/12/20
function daysCount(start, end) {
  return (
    (new Date(end).getTime() - new Date(start).getTime()) / 1000 / 3600 / 24
  )
}

console.log(daysCount("2020-12-20", "2020-12-21"))
