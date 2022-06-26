import React, { Component } from "react"
// import { Link, Route } from "react-router-dom" // 普通
// import { NavLink, Route } from "react-router-dom" // 高亮
// import { Route } from "react-router-dom" // 二次封装NavLink
import { Route, Switch, Redirect } from "react-router-dom" // Switch
import MyNavLink from "./components/myNavLink"
import Test from "./components/test"
import Home from "./pages/home"
import About from "./pages/about"
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h3>React Router</h3>
        <div className="container">
          <div className="nav">
            {/* <Link to="/home">Home</Link>
            <Link to="/about">About</Link> */}

            {/* <NavLink activeClassName="active" to="/home">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink> */}

            <MyNavLink to="/home">Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
          </div>
          <div className="content">
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/about" component={Test}></Route>
              <Redirect to="/home"></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
