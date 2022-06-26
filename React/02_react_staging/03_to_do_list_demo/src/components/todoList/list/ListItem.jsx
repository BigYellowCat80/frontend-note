import React, { Component } from "react"
import PropTypes from "prop-types"
import "./ListItem.css"

export default class ListItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    changeStatus: PropTypes.func.isRequired
  }

  changeStatus = (id) => {
    return (event) => {
      const { target } = event
      const todo = {
        id,
        checked: target.checked
      }
      const { changeStatus } = this.props
      changeStatus(todo)
    }
  }

  deleteTodo = (id, name) => {
    return () => {
      if (window.confirm(`Are you sure to delete item ${name}`)) {
        const { deleteTodo } = this.props
        deleteTodo(id)
      }
    }
  }

  render() {
    const { todo } = this.props
    const { id, name, checked } = todo

    return (
      <li className="list-item">
        <div className="left">
          <label>
            <input
              type="checkbox"
              className="checkbox"
              checked={checked}
              onChange={this.changeStatus(id)}
            />
            <span className="name">{name}</span>
          </label>
        </div>
        <div className="right">
          <button onClick={this.deleteTodo(id, name)}>Delete</button>
        </div>
      </li>
    )
  }
}
