import React from "react"
import { useRoutes, NavLink, useInRouterContext } from "react-router-dom"

import "./App.css"
import routes from "./routes"
import Header from "./components/header"

export default function App() {
  const element = useRoutes(routes)
  console.log("App - useInRouterContext", useInRouterContext()) // true
  return (
    <div>
      <Header />
      <div className="links">
        <NavLink to="/home">
          {/* <NavLink to="/home" end> */}
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="routes">{element}</div>
    </div>
  )
}
