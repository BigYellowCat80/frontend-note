import React, { Component } from "react"
import { nanoid } from "nanoid"
import PropTypes from "prop-types"
import "./index.css"

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  addTodo = (event) => {
    const { keyCode, target } = event
    if (keyCode !== 13) {
      return
    }

    if (!target.value.trim()) {
      return window.alert("Cannot add an empty item")
    }

    const submitData = { id: nanoid(), name: target.value, checked: false }
    const { addTodo } = this.props
    addTodo(submitData)
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
          onKeyDown={this.addTodo}
        />
      </div>
    )
  }
}
