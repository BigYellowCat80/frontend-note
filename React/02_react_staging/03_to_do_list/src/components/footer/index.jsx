import React, { Component } from "react"
import "./index.css"

export default class Footer extends Component {
  deleteAllCheckedToDo = () => {
    if (window.confirm(`Are you sure to delete all complete items?`)) {
      const { deleteAllCheckedToDo } = this.props
      deleteAllCheckedToDo()
    }
  }

  toggleAll = (event) => {
    const { toggleAll } = this.props
    toggleAll(event.target.checked)
  }

  render() {
    const { todos } = this.props
    const { length } = todos
    const checkedLength = todos.filter((todo) => todo.checked).length
    const allChecked = length && length === checkedLength

    return (
      <div className="footer">
        <div className="left">
          <label>
            <input
              type="checkbox"
              checked={allChecked}
              onChange={this.toggleAll}
            />
            <span className="name">
              Complete {checkedLength} of {length}
            </span>
          </label>
        </div>
        <div className="right">
          <button className="delete-btn" onClick={this.deleteAllCheckedToDo}>
            Delete Complete Items
          </button>
        </div>
      </div>
    )
  }
}
