import React, { Component } from "react"
import { nanoid } from "nanoid"

import "./index.css"

export default class Child extends Component {
  state = {
    // list: [
    //   { id: nanoid(), name: "Anna" },
    //   { id: nanoid(), name: "Peter" },
    //   { id: nanoid(), name: "John" }
    // ]
    list: "ccc"
  }
  render() {
    const { list } = this.state
    return (
      <div className="child">
        <h3>Child</h3>
        <ul>
          {list.map((el) => {
            return <li key={el.id}>{el.name}</li>
          })}
        </ul>
      </div>
    )
  }
}
