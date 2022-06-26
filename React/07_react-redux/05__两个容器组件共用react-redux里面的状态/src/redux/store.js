import { createStore, applyMiddleware, combineReducers } from "redux"
import count from "./reducers/count"
import list from "./reducers/person"
import reduxThunk from "redux-thunk"

export default createStore(
  combineReducers({
    count,
    list
  }),
  applyMiddleware(reduxThunk)
)
