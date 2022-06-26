import React, { Component } from "react"
import SearchGithubUser from "./searchGithubUser"
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchGithubUser />
        <SearchGithubUser />
      </div>
    )
  }
}
