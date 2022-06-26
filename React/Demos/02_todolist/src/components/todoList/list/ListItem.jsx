import React from "react"
import "./ListItem.css"

export default function ListItem(props) {
  const { item, del, changeDone } = props

  return (
    <li className="list-item">
      <div className="left">
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={item.done}
            onChange={(event) => {
              changeDone({ id: item.id, done: event.target.checked })
            }}
          />
          <span className="name">{item.value}</span>
        </label>
      </div>
      <div className="right">
        <button
          onClick={() => {
            window.confirm(`Are you sure to delete item ${item.value}`) &&
              del(item.id)
          }}
        >
          Delete
        </button>
      </div>
    </li>
  )
}
