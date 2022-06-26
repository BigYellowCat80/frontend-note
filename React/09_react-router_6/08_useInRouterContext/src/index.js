import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Demo from "./components/demo"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <div>
    <Demo />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </div>,

  document.getElementById("root")
)
