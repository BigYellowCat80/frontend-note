import { ADD_PERSON } from "../constant"
import { nanoid } from "nanoid"

const initState = [{ id: nanoid(), name: "Anne" }]
export default function reducerPerson(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      console.log("data in reducer", data)
      return [data, ...preState]

    default:
      return preState
  }
}
