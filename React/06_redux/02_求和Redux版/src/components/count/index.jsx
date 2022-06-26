import React, { Component } from "react"

import "./index.css"
import store from "../../redux/store"

export default class Count extends Component {
  add = () => {
    const { value } = this.select
    store.dispatch({ type: "add", data: value * 1 })
  }

  minus = () => {
    const { value } = this.select
    store.dispatch({ type: "minus", data: value * 1 })
  }

  addIfSumIsOdd = () => {
    const { value } = this.select
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch({ type: "add", data: value * 1 })
    } else {
      alert("Sum is even now, I'm gonna return")
    }
  }

  addAsync = () => {
    const { value } = this.select
    setTimeout(() => {
      store.dispatch({ type: "add", data: value * 1 })
    }, 1000)
  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({}) // 目的是让render调用一遍。但是这样写复用性不高，如果有3000个组件，这个subscribe要写3000次。因此可以直接在入口文件index.js面写
  //   })
  // }

  render() {
    return (
      <div>
        <div>Sum: {store.getState()}</div>

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
