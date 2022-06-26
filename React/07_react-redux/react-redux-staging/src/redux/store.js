import { createStore, applyMiddleware, combineReducers } from "redux"
import count from "./reducers/count"
import list from "./reducers/person"
import reduxThunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

export default createStore(
  combineReducers({
    count,
    list
  }),
  composeWithDevTools(applyMiddleware(reduxThunk))
)
