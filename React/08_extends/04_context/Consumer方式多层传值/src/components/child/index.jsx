import React, { Component } from "react"
import MyContext from "../../context"

const { Consumer } = MyContext

export default class Child extends Component {
  render() {
    return (
      <div className="child">
        <h3>I'm the Child</h3>
        <Consumer>
          {(value) => {
            const { username, age } = value
            return (
              <div>
                State From Grand Father: {username} - {age}
              </div>
            )
          }}
        </Consumer>
      </div>
    )
  }
}
