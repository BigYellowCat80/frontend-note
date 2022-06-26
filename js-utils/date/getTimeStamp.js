// 获取当前时间戳

// mehtod 1
// const getTimeStamp = () => new Date().getTime()

// mehtod 2
// const getTimeStamp = () => Date.parse(new Date())

// mehtod 3
const getTimeStamp = () => Date.now()

console.log(getTimeStamp())
