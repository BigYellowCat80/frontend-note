import React, { Component } from "react"
import { nanoid } from "nanoid"

import Header from "./components/header"
import List from "./components/list"
import Footer from "./components/footer"
import "./App.css"

export default class App extends Component {
  state = {
    todos: [
      { id: nanoid(), name: "eat", checked: false },
      { id: nanoid(), name: "sleep", checked: true },
      { id: nanoid(), name: "drink", checked: false }
    ]
  }

  addTodo = (todo) => {
    const { todos } = this.state

    this.setState({
      todos: [todo, ...todos]
    })
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    // 过滤就是删除
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({ todos: newTodos })
  }

  changeStatus = (statusObj) => {
    const { todos } = this.state
    const { id, status } = statusObj

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: status }
      } else {
        return todo
      }
    })
    this.setState({ todos: newTodos })
  }

  toggleAll = (status) => {
    const { todos } = this.state
    todos.forEach((todo) => (todo.checked = status))

    this.setState({ todos })
  }

  deleteAllCheckedToDo = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => !todo.checked)
    console.log("newTodos", newTodos)
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="container">
        <Header addTodo={this.addTodo} />
        <List
          todos={todos}
          changeStatus={this.changeStatus}
          deleteTodo={this.deleteTodo}
        />
        <Footer
          todos={todos}
          toggleAll={this.toggleAll}
          deleteAllCheckedToDo={this.deleteAllCheckedToDo}
        />
      </div>
    )
  }
}
