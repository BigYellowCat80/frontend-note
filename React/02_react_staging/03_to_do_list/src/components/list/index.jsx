import React, { Component } from "react"
import PropTypes from "prop-types"
import ListItem from "./ListItem"

import "./index.css"

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    changeStatus: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
  render() {
    const { todos, changeStatus, deleteTodo } = this.props

    return (
      <ul className="list">
        {todos.map((todo, index) => {
          return (
            <ListItem
              key={todo.id}
              {...todo}
              changeStatus={changeStatus}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    )
  }
}
