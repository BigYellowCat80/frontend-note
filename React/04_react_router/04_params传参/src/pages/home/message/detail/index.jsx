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
    // console.log("this.props", this.props)
    console.log("this.props.match.params", this.props.match.params)
    const { id, title } = this.props.match.params

    const { details } = this.state
    const item = details.find((el) => el.id === id)
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
