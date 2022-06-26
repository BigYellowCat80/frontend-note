import React, { Component } from "react"
import { Route } from "react-router-dom"

import MyNavLink from "../../../components/myNavLink"
import Detail from "./detail"

export default class Message extends Component {
  state = {
    messages: [
      {
        id: "001",
        title: "morning"
      },
      {
        id: "002",
        title: "noon"
      },
      {
        id: "003",
        title: "night"
      }
    ]
  }

  render() {
    const { messages } = this.state
    return (
      <div>
        <ul>
          {messages.map((el) => {
            return (
              <li key={el.id}>
                <MyNavLink to={`/home/message/detail/${el.id}/${el.title}`}>
                  {el.title}
                </MyNavLink>
              </li>
            )
          })}
        </ul>

        <hr />

        <Route
          path="/home/message/detail/:id/:title"
          component={Detail}
        ></Route>
      </div>
    )
  }
}
