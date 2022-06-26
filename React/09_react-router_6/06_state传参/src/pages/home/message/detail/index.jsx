import React from "react"
import { useLocation } from "react-router-dom"

export default function Detail() {
  const location = useLocation()
  console.log("location.state", location.state) // state: {id: '002', title: 'noon'}
  const { id, title } = location.state

  return (
    <div>
      <div>id: {id}</div>
      <div>title: {title}</div>
    </div>
  )
}
