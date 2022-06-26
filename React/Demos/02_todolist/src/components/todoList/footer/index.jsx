import React from "react"
import "./index.css"

export default function Footer(props) {
  const { list, delAllDone, changeAllDone } = props
  const { length } = list
  const doneLength = list.filter((el) => el.done).length

  return (
    <div className="footer">
      <div className="left">
        <label>
          <input
            type="checkbox"
            checked={doneLength && doneLength === length}
            onChange={(event) => {
              changeAllDone(event.target.checked)
            }}
          />
          <span className="name">
            Complete {doneLength} of {length}
          </span>
        </label>
      </div>
      <div className="right">
        <button
          className="delete-btn"
          onClick={() => {
            window.confirm(`Are you sure to delete all complete items?`) &&
              delAllDone()
          }}
        >
          Delete Complete Items
        </button>
      </div>
    </div>
  )
}
