import React, { Component } from "react"
import PropTypes from "prop-types"
import { nanoid } from "nanoid"
import "./index.css"

export default class Header extends Component {
  static propTypes = {
    submitHandler: PropTypes.func.isRequired
  }

  submitHandler = (event) => {
    const { keyCode, target } = event
    if (keyCode !== 13) {
      return
    }

    let { value } = target
    value = value.trim()
    if (!value) {
      alert("Cannot add an empty item")
      return
    }

    const todo = {
      id: nanoid(),
      name: value,
      checked: false
    }

    const { submitHandler } = this.props
    submitHandler(todo)
    target.value = ""
    target.focus()
  }

  render() {
    return (
      <div className="header">
        <input
          type="text"
          className="input"
          placeholder="Type here..."
          onKeyDown={this.submitHandler}
        />
      </div>
    )
  }
}
