import React, { Component } from "react"

export default class Count extends Component {
  state = { count: 100 }

  add = () => {
    // 1. setState传入对象 setState({} [, callback])
    // const { count } = this.state
    // this.setState({ count: count + 1 }, () => {
    //   console.log("callback count: ", this.state.count) // 101
    // })
    // console.log("count: ", this.state.count) // 100
    // ===============================================================
    // 2. setState传入函数 setState((state, props) => ({}) [, callback])
    this.setState((state) => ({ count: state.count + 1 }))
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h3 className="count">{count}</h3>
        <button onClick={this.add}>add</button>
      </div>
    )
  }
}
