import { ADD_PERSON } from "../constant"

export function addPerson(data) {
  console.log("data", data)
  return {
    type: ADD_PERSON,
    data
  }
}
