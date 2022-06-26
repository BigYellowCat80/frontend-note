import { ADD, MINUS } from "./constant"

export function add(data) {
  console.log("add from action")
  return {
    type: ADD,
    data
  }
}

export function minus(data) {
  console.log("minus from action")
  return {
    type: MINUS,
    data
  }
}

export function asyncAdd(data, delay = 1000) {
  console.log("asyncAdd from action")
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(data))
    }, delay)
  }
}
