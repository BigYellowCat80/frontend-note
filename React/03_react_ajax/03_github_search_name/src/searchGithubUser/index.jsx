import React, { Component } from "react"
import SearchHeader from "./searchHeader"
import SearchBody from "./searchBody"
import "./index.css"

export default class SearchGithubUser extends Component {
  state = {
    keyword: "",
    isFirstRender: true,
    isLoading: false,
    error: "",
    results: []
  }

  updateState = (state) => {
    this.setState(state)
  }

  render() {
    const { state } = this
    return (
      <div className="container">
        <SearchHeader updateState={this.updateState} />
        <SearchBody {...state} />
      </div>
    )
  }
}
