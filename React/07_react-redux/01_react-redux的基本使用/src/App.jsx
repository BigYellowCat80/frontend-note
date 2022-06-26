import React, { Component } from "react"
import store from "./redux/store"

import "./App.css"
import Count from "./containers/count"

export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store} />
      </div>
    )
  }
}
