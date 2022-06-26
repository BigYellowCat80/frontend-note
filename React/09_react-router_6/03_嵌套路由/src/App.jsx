import React from "react"
import { useRoutes, NavLink } from "react-router-dom"

import "./App.css"
import routes from "./routes"

export default function App() {
  const element = useRoutes(routes)
  return (
    <div>
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
