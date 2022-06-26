import React, { Component } from "react"
import "./index.css"

export default class Friends extends Component {
  render() {
    const { title } = this.props
    return (
      <div>
        <h3>This is the title from Modal: {title}</h3>
      </div>
    )
  }
}
