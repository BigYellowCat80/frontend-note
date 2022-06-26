import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import store from "./redux/store"

// 这样写的好处是，只要store的一个数据发生变化，整个app就render一遍。不需要担心效率问题，因为有Diff算法
render()
store.subscribe(() => {
  render()
})

// 这么封装是因为上来需要调用一遍的
function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  )
}
