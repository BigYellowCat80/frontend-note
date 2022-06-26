import React, { Component } from "react"
import PubSub from "pubsub-js"
import "./index.css"

export default class SearchBody extends Component {
  state = {
    keyword: "",
    isFirstRender: true,
    isLoading: false,
    error: "",
    results: []
  }

  componentDidMount() {
    PubSub.unsubscribe(this.token)
    this.token2 = PubSub.subscribe("UPDATE_STATE2", (_, state) => {
      console.log("UPDATE_STATE2")
      this.setState(state)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token2)
  }

  render() {
    const { isFirstRender, isLoading, error, results } = this.state
    return (
      <div className="search-body">
        {isFirstRender ? (
          <h3>Welcome to search!</h3>
        ) : isLoading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <ul className="list">
            {results.map((el) => {
              return (
                <li className="list-item" key={el.id}>
                  <a target="_blank" href={el.html_url} rel="noreferrer">
                    <img src={el.avatar_url} alt="" />
                    <span>{el.login}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    )
  }
}
