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
                <MyNavLink
                  replace
                  to={{
                    pathname: "/home/message/detail/",
                    state: { id: el.id, title: el.title }
                  }}
                >
                  {el.title}
                </MyNavLink>
              </li>
            )
          })}
        </ul>

        <hr />

        {/* search方式不用声明 */}
        <Route path="/home/message/detail" component={Detail}></Route>
      </div>
    )
  }
}
