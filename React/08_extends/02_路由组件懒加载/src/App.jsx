import React, { Component, lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"

import MyNavLink from "./components/myNavLink"
import Loading from "./components/loading"
// import Home from "./pages/home"
// import About from "./pages/about"

const Home = lazy(() => import("./pages/home"))
const About = lazy(() => import("./pages/about"))

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
            <Suspense fallback={<Loading />}>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              {/* <Redirect to="/home"></Redirect> */}
            </Suspense>
          </Switch>
        </div>
      </div>
    )
  }
}
