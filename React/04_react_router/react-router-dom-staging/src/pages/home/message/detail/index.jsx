import React, { Component } from "react"

export default class Detail extends Component {
  state = {
    details: [
      {
        id: "001",
        content: "drink coffee"
      },
      {
        id: "002",
        content: "eat beef"
      },
      {
        id: "003",
        content: "drink beer"
      }
    ]
  }

  render() {
    console.log(this.props)
    let { id, title } = this.props.location.state || {} // 这么写是因为清空了浏览器缓存后，this.props.location.state默认为undefined

    const { details } = this.state
    const item = details.find((el) => el.id === id) || { content: "" }
    const content = item.content || ""

    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {content}</li>
      </ul>
    )
  }
}
