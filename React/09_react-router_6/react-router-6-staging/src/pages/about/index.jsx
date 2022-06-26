import React from "react"
import { Navigate, useNavigationType } from "react-router-dom"
import "./index.css"

export default function About() {
  const [num, setNum] = React.useState(0)
  console.log("useNavigationType", useNavigationType()) // PUSH

  function $setNum() {
    setNum(num + 1)
  }

  return (
    <div className="about">
      {num === 5 ? <Navigate to="/home" /> : <h3>Number: {num}</h3>}
      <button onClick={$setNum}>add</button>
    </div>
  )
}
