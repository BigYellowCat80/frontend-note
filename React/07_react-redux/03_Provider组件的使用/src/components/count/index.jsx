import React, { Component } from "react"

import "./index.css"

export default class Count extends Component {
  add = () => {
    const { value } = this.select
    const { add } = this.props
    add(value * 1)
  }

  minus = () => {
    const { value } = this.select
    const { minus } = this.props
    minus(value * 1)
  }

  addIfSumIsOdd = () => {
    const { count } = this.props
    if (count % 2 !== 0) {
      const { value } = this.select
      const { add } = this.props
      add(value * 1)
    } else {
      alert("sum is not odd")
    }
  }

  asyncAdd = () => {
    const { value } = this.select
    const { asyncAdd } = this.props
    asyncAdd(value * 1, 5000)
  }

  render() {
    console.log("this.props", this.props)
    const { count } = this.props
    return (
      <div>
        <div>Sum: {count}</div>

        <div className="item btns">
          <button onClick={this.add}>add</button>
          <button onClick={this.minus}>minus</button>
          <button onClick={this.addIfSumIsOdd}>add if sum is odd</button>
          <button onClick={this.asyncAdd}>add async</button>
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
