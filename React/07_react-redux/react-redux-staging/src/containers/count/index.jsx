import { connect } from "react-redux"
import React, { Component } from "react"

import "./index.css"
import { add, minus, asyncAdd } from "../../redux/actions/count"

class Count extends Component {
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
    console.log("count: this.props", this.props)
    const { count, list } = this.props
    return (
      <div>
        <div className="result">
          Array length in Person Component: {list.length}
        </div>
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

function mapStateToProps(state) {
  return { count: state.count, list: state.list }
}

const mapDispatchToProps = {
  add,
  minus,
  asyncAdd
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
