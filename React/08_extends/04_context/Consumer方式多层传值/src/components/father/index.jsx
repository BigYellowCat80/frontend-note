import React, { Component } from "react"
import Child from "../child"

export default class Father extends Component {
  render() {
    return (
      <div className="father">
        <h3>I'm the Father</h3>
        <Child />
      </div>
    )
  }
}
