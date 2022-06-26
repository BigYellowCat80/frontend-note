import React from "react"
import { Component } from "react"

import HelloReact from "./components/hello_react"
import Welcome from "./components/welcome"

class App extends Component {
  render() {
    return (
      <div>
        <HelloReact />
        <Welcome />
      </div>
    )
  }
}

export default App
