import React from "react"

import "./index.css"
import ListItem from "./ListItem"

export default function List(props) {
  const { list, del, changeDone } = props

  return (
    <ul className="list">
      {list.map((el) => {
        return (
          <ListItem key={el.id} item={el} del={del} changeDone={changeDone} />
        )
      })}
    </ul>
  )
}
