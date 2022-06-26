import React, { Component } from "react"
import TodoList from "./components/todoList"
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoList />
        <TodoList />
      </div>
    )
  }
}
