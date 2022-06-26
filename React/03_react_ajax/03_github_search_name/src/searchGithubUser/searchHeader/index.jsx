import React, { Component } from "react"
import axios from "axios"
import "./index.css"

export default class SearchHeader extends Component {
  search = (event) => {
    const { type } = event
    const value = this.input.value.trim()

    if (type === "click" || (type === "keydown" && event.keyCode === 13)) {
      if (!this.validate(value)) {
        return
      }

      const { updateState } = this.props
      updateState({ keyword: value, isLoading: true, isFirstRender: false })
      this.input.value = value
      axios
        .get(`http://api.github.com/search/users?q=${value}`)
        .then((res) => {
          console.log("res", res)
          updateState({ isLoading: false, results: res.data.items })
        })
        .catch((err) => {
          updateState({ isLoading: false, error: err.message })
        })
    }
  }

  validate = (value) => {
    if (!value) {
      alert("Please input keyword to search")
      return false
    }

    return true
  }

  render() {
    return (
      <div className="search-header">
        <h3>Search Github User</h3>
        <div className="input-box">
          <input
            type="text"
            placeholder="Input keyword to search"
            ref={(element) => (this.input = element)}
            onKeyDown={this.search}
          />
          <button onClick={this.search}>search</button>
        </div>
      </div>
    )
  }
}
