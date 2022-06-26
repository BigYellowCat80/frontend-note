import React from "react"
import { Component } from "react"
import helloreact from "./index.module.css"

class HelloReact extends Component {
  render() {
    return <h3 className={helloreact.title}>Hello React</h3>
  }
}

export default HelloReact
