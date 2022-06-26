import React, { Component } from "react"
import "./ListItem.css"

export default class ListItem extends Component {
  changeStatus = (id) => {
    return (event) => {
      const { changeStatus } = this.props
      const submitData = { id, status: event.target.checked }
      console.log(event.target.checked)
      changeStatus(submitData)
    }
  }

  deleteTodo = (id, name) => {
    return () => {
      if (window.confirm(`Are you sure to delete ${name}`)) {
        const { deleteTodo } = this.props
        deleteTodo(id)
      }
    }
  }

  render() {
    const { id, name, checked } = this.props

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
