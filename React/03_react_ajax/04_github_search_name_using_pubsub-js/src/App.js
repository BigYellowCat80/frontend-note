import React, { Component } from "react"
import SearchGithubUser from "./searchGithubUser"
import SearchGithubUser2 from "./searchGithubUser2"
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchGithubUser key={Date.now()} />
        <SearchGithubUser key={2 * Date.now()} />
        <SearchGithubUser2 />
      </div>
    )
  }
}
