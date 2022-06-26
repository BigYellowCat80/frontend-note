import React, { Component } from "react"
import SearchHeader from "./searchHeader"
import SearchBody from "./searchBody"
import "./index.css"

export default class SearchGithubUser2 extends Component {
  render() {
    return (
      <div className="container">
        <SearchHeader />
        <SearchBody />
      </div>
    )
  }
}
