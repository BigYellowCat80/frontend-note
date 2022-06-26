import React, { Component } from "react"
import PropTypes from "prop-types"
import "./index.css"

export default class Footer extends Component {
  static propTypes = {
    length: PropTypes.number.isRequired,
    completeLength: PropTypes.number.isRequired,
    deleteCompleteTodo: PropTypes.func.isRequired,
    toggleAll: PropTypes.func.isRequired
  }

  deleteCompleteTodo = () => {
    if (window.confirm(`Are you sure to delete all complete items?`)) {
      const { deleteCompleteTodo } = this.props
      deleteCompleteTodo()
    }
  }

  toggleAll = (event) => {
    const { checked } = event.target
    const { toggleAll } = this.props
    toggleAll(checked)
  }

  render() {
    const { length, completeLength } = this.props
    const allChekced = length && length === completeLength

    return (
      <div className="footer">
        <div className="left">
          <label>
            <input
              type="checkbox"
              checked={allChekced}
              onChange={this.toggleAll}
            />
            <span className="name">
              Complete {completeLength} of {length}
            </span>
          </label>
        </div>
        <div className="right">
          <button className="delete-btn" onClick={this.deleteCompleteTodo}>
            Delete Complete Items
          </button>
        </div>
      </div>
    )
  }
}
