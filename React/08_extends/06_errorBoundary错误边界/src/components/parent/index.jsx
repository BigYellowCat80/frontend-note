import React, { Component } from "react"

import "./index.css"
import Child from "../child"

export default class Parent extends Component {
  state = { error: "" } // 返回新的state

  // 当Parent的组组件出现报错时，会触发getDerivedStateFromError，并携带错误信息
  static getDerivedStateFromError(error) {
    console.log("error", error)
    return { error }
  }

  componentDidCatch() {
    console.log("这里一般统计错误次数，发送给后台")
  }

  render() {
    const { error } = this.state
    return (
      <div className="parent">
        <h3>Parent</h3>
        {error ? <h3>Loading...</h3> : <Child />}
        {/* 这样处理的话，即使Child组件有错误，只显示Loading。不至于项目运行不起来。只在生产环境适用 */}
      </div>
    )
  }
}
