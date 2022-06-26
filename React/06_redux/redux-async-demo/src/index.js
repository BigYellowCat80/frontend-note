import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import store from "./redux/store"

render()
store.subscribe(() => {
  render()
})

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  )
}
