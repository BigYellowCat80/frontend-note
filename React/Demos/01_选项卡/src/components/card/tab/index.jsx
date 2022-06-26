import React from "react"
import "./index.css"

export default function Tab(props) {
  const { list, activeId, setActiveId } = props
  return (
    <ul className="tabs">
      {list.map((el) => {
        return (
          <li
            key={el.id}
            className={`tab${activeId === el.id ? " active" : ""}`}
            onClick={() => {
              console.log(el.id)
              setActiveId(el.id)
            }}
          >
            {el.title}
          </li>
        )
      })}
    </ul>
  )
}
