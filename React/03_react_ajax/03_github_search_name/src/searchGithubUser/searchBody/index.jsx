import React, { Component } from "react"
import "./index.css"

export default class SearchBody extends Component {
  render() {
    const { isFirstRender, isLoading, error, results } = this.props
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
