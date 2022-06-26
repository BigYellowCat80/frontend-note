import React, { Component } from "react"

import "./index.css"
import Father from "../father"
import MyContext from "../../context"
const { Provider } = MyContext

export default class Grand extends Component {
  state = {
    username: "Grand",
    age: 60
  }

  render() {
    const { username, age } = this.state
    return (
      <div className="grand">
        <h3>I'm the Grand Father</h3>
        <Provider value={{ username, age }}>
          <Father />
        </Provider>
      </div>
    )
  }
}
