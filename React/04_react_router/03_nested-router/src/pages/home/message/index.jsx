import React, { Component } from "react"

export default class Message extends Component {
  state = {
    messages: [
      {
        id: "001",
        message: "good morning"
      },
      {
        id: "002",
        message: "good noon"
      },
      {
        id: "003",
        message: "good night"
      }
    ]
  }

  render() {
    const { messages } = this.state
    return (
      <div>
        <ul>
          {messages.map((el) => {
            return <li key={el.id}>{el.message}</li>
          })}
        </ul>
      </div>
    )
  }
}
