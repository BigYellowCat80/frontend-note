import { createStore, applyMiddleware } from "redux"
import reducerCount from "./reducerCount"
import reduxThunk from "redux-thunk"

export default createStore(reducerCount, applyMiddleware(reduxThunk))
