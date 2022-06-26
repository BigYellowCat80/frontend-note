import React, { Component } from "react"
import PropTypes from "prop-types"

import ListItem from "./ListItem"
import "./index.css"

export default class index extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    changeStatus: PropTypes.func.isRequired
  }

  render() {
    const { todos, deleteTodo, changeStatus } = this.props
    return (
      <ul className="list">
        {todos.map((todo) => {
          return (
            <ListItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              changeStatus={changeStatus}
            />
          )
        })}
      </ul>
    )
  }
}
