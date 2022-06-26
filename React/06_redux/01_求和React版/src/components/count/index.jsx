import React, { Component } from "react"

import "./index.css"

export default class Count extends Component {
  state = { count: 0 }

  add = () => {
    const { value } = this.select
    const { count } = this.state
    this.setState({ count: count + value * 1 })
  }

  minus = () => {
    const { value } = this.select
    const { count } = this.state
    this.setState({ count: count - value * 1 })
  }

  addIfSumIsOdd = () => {
    const { value } = this.select
    const { count } = this.state
    if (count % 2 !== 0) {
      this.setState({ count: count + value * 1 })
    } else {
      alert("Sum is even now, I'm gonna return")
    }
  }

  addAsync = () => {
    const { value } = this.select
    const { count } = this.state
    setTimeout(() => {
      this.setState({ count: count + value * 1 })
    }, 1000)
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <div>Sum: {count}</div>

        <div className="item btns">
          <button onClick={this.add}>add</button>
          <button onClick={this.minus}>minus</button>
          <button onClick={this.addIfSumIsOdd}>add if sum is odd</button>
          <button onClick={this.addAsync}>add async</button>
        </div>

        <div className="item source-data">
          <select ref={(select) => (this.select = select)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    )
  }
}
