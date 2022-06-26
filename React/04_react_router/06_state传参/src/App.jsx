import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import "./App.css"

import MyNavLink from "./components/myNavLink"
import Home from "./pages/home"
import About from "./pages/about"

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="links">
          <MyNavLink to="/home">Home</MyNavLink>
          <MyNavLink to="/about">About</MyNavLink>
        </div>
        <div className="routes">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
