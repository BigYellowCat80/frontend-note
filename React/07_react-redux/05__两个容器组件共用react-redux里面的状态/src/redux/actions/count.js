import { ADD, MINUS } from "../constant"
// import store from "./store"

export function add(data) {
  return {
    type: ADD,
    data
  }
}

export function minus(data) {
  return {
    type: MINUS,
    data
  }
}

// export function asyncAdd(data, delay) {
//   console.log(add(data))
//   return () => {
//     setTimeout(() => {
//       store.dispatch(add(data))
//     }, delay)
//   }
// }

// 或者不用引入store
export function asyncAdd(data, delay) {
  logDate()
  setInterval(() => {
    logDate()
  }, 1000)

  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(data))
    }, delay)
  }
}

function logDate() {
  console.log(new Date())
}
