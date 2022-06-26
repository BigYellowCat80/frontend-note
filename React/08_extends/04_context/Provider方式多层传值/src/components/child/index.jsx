import React, { Component } from "react"
import MyContext from "../../context"

export default class Child extends Component {
  static contextType = MyContext
  render() {
    const { username, age } = this.context

    return (
      <div className="child">
        <h3>I'm the Child</h3>
        <div>
          State From Grand Father: {username} - {age}
        </div>
      </div>
    )
  }
}
