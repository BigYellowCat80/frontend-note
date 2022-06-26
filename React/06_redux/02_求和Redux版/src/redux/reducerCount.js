// preState初始化的时候是undefined，如果不传就用默认值initState

const initState = 0
export default function reducerCount(preState = initState, action) {
  // console.log(preState, action)
  console.log("preState", preState)

  const { type, data } = action

  switch (type) {
    case "add":
      return preState + data

    case "minus":
      return preState - data

    default:
      return preState
  }
}
