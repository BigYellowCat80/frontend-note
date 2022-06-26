import React, { Component } from "react"
import axios from "axios"
import PubSub from "pubsub-js"
import "./index.css"

export default class SearchHeader extends Component {
  search = (event) => {
    const { type } = event
    const value = this.input.value.trim()

    if (type === "click" || (type === "keydown" && event.keyCode === 13)) {
      if (!this.validate(value)) {
        return
      }

      PubSub.publish("UPDATE_STATE2", {
        keyword: value,
        isLoading: true,
        isFirstRender: false
      })
      this.input.value = value
      axios
        .get(`http://api.github.com/search/users?q=${value}`)
        .then((res) => {
          console.log("res", res)
          PubSub.publish("UPDATE_STATE2", {
            isLoading: false,
            results: res.data.items
          })
        })
        .catch((err) => {
          PubSub.publish("UPDATE_STATE2", {
            isLoading: false,
            error: err.message
          })
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
