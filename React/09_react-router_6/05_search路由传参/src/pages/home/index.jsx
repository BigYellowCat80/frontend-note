import React from "react"
import { Outlet, NavLink } from "react-router-dom"

import "./index.css"

export default function Home() {
  return (
    <div className="home">
      <h3>Home</h3>
      <div>
        <NavLink to="news" style={{ marginRight: "8px" }}>
          News
        </NavLink>
        <NavLink to="message">Message</NavLink>
      </div>

      <div className="routes">
        {/* 有点像Vue中的RouterLink */}
        <Outlet />
      </div>
    </div>
  )
}
