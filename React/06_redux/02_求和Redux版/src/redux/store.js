import { createStore } from "redux"

// 引入为Count组件服务的reducer
import reducerCount from "./reducerCount"

const store = createStore(reducerCount)

export default store
