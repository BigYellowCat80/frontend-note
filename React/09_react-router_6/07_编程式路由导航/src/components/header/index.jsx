import React from "react"
import { useNavigate } from "react-router-dom"

import "./index.css"

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className="header">
      <h3>Header</h3>
      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(1)
        }}
      >
        Forward
      </button>
    </div>
  )
}
