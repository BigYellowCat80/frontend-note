import { ADD, MINUS } from "./constant"

const initState = 100
export default function reducerCount(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD:
      return preState + data

    case MINUS:
      return preState - data

    default:
      return preState
  }
}
