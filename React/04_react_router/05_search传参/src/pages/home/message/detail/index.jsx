import React, { Component } from "react"
import { parse } from "qs"

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
    let { search } = this.props.location
    search = search.slice(1)
    console.log("search", search)
    const { id, title } = parse(search)

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
