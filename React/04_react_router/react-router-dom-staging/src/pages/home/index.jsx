import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"

import "./index.css"
import MyNavLink from "../../components/myNavLink"
import News from "./news"
import Message from "./message"

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3>This is home page</h3>
        <div>
          <MyNavLink style={{ marginRight: "8px" }} to="/home/news">
            News
          </MyNavLink>
          <MyNavLink to="/home/message">Message</MyNavLink>
        </div>

        <div>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/message" component={Message}></Route>
          <Redirect to="/home/message"></Redirect>
        </div>
      </div>
    )
  }
}
