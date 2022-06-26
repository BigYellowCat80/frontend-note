import React, { Component } from "react"
import "./index.css"
import Header from "./header"
import List from "./list"
import Footer from "./footer"
import { nanoid } from "nanoid"

export default class TodoList extends Component {
  state = {
    todos: [
      { id: nanoid(), name: "eat", checked: false },
      { id: nanoid(), name: "drink", checked: true },
      { id: nanoid(), name: "sleep", checked: false }
    ]
  }

  submitHandler = (todo) => {
    const { todos } = this.state
    const newTodoList = [todo, ...todos]
    this.setState({ todos: newTodoList })
  }

  changeStatus = (todo) => {
    const { todos } = this.state
    const { id, checked } = todo
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked }
      } else {
        return todo
      }
    })
    this.setState({ todos: newTodoList })
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodoList = todos.filter((todo) => todo.id !== id)
    this.setState({ todos: newTodoList })
  }

  deleteCompleteTodo = () => {
    const { todos } = this.state
    const newTodoList = todos.filter((todo) => !todo.checked)
    this.setState({ todos: newTodoList })
  }

  toggleAll = (checked) => {
    const { todos } = this.state
    todos.forEach((todo) => (todo.checked = checked))
    this.setState({ todos })
  }

  render() {
    const { todos } = this.state
    const { length } = todos
    const completeLength = todos.filter((todo) => todo.checked).length

    return (
      <div className="container">
        <Header submitHandler={this.submitHandler} />
        <List
          todos={todos}
          deleteTodo={this.deleteTodo}
          changeStatus={this.changeStatus}
        />
        <Footer
          length={length}
          completeLength={completeLength}
          deleteCompleteTodo={this.deleteCompleteTodo}
          toggleAll={this.toggleAll}
        />
      </div>
    )
  }
}
