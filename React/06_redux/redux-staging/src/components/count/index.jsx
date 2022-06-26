import React, { Component } from "react"
import store from "../../redux/store"

import "./index.css"
import { add, minus, asyncAdd } from "../../redux/actionCount"

export default class Count extends Component {
  state = { count: 0 }

  add = () => {
    const { value } = this.select
    store.dispatch(add(value * 1))
  }

  minus = () => {
    const { value } = this.select
    store.dispatch(minus(value * 1))
  }

  addIfSumIsOdd = () => {
    const { value } = this.select
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(add(value * 1))
    } else {
      alert("Sum is even now, I'm gonna return")
    }
  }

  asyncAdd = () => {
    const { value } = this.select
    store.dispatch(asyncAdd(value * 1, 1000))
  }

  render() {
    return (
      <div>
        <div>Sum: {store.getState()}</div>

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
