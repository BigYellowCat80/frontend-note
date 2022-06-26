import React from "react"
import { NavLink } from "react-router-dom"
import "./index.css"

export default function MyNavLink(props) {
  return (
    <div>
      <NavLink className="link" activeclassname="active" {...props}></NavLink>
    </div>
  )
}
