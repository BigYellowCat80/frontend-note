import React from "react"
import { useRoutes } from "react-router-dom"

import "./App.css"
import MyNavLink from "./components/myNavLink"
import routes from "./routes"

export default function App() {
  const element = useRoutes(routes)
  return (
    <div>
      <div className="links">
        <MyNavLink to="/home">Home</MyNavLink>
        <MyNavLink to="/about">About</MyNavLink>
      </div>
      <div className="routes">{element}</div>
    </div>
  )
}
