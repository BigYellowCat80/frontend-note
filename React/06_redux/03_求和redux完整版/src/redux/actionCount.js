import { ADD, MINUS } from "./constant"

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
