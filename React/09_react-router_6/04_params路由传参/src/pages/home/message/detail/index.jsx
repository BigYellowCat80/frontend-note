import React from "react"
import { useParams, useMatch } from "react-router-dom"

export default function Detail() {
  // version 1 常用
  const params = useParams()
  console.log("params", params) // {id: '003', title: 'night'}
  const { id, title } = params

  // version 2 不常用，知道即可
  // const match = useMatch("/home/message/detail/:id/:title")
  // console.log("params", match.params)
  return (
    <div>
      <div>id: {id}</div>
      <div>title: {title}</div>
    </div>
  )
}
