import React, { Component } from "react"
import "./App.css"
import axios from "axios"

export default class App extends Component {
  getStudentsData = () => {
    axios
      .get("http://localhost:3000/api1/students")
      .then((res) => {
        console.log("students", res.data)
      })
      .catch((error) => {
        console.log("error", error)
      })
  }

  getCarsData = () => {
    axios
      .get("http://localhost:3000/api2/cars")
      .then((res) => {
        console.log("cars", res.data)
      })
      .catch((error) => {
        console.log("error", error)
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentsData}>get students data</button>
        <button onClick={this.getCarsData}>get cars data</button>
      </div>
    )
  }
}
