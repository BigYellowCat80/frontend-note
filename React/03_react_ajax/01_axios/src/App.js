import React, { Component } from "react"
import axios from "axios"

export default class App extends Component {
  getStudentsData = () => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => {
        console.log("res.data", res.data)
      })
      .catch((error) => {
        console.log("error", error)
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentsData}>get students data</button>
      </div>
    )
  }
}
