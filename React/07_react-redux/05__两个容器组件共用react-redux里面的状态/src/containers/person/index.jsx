import { nanoid } from "nanoid"
import React, { Component } from "react"
import { connect } from "react-redux"
import { addPerson } from "../../redux/actions/person"

import "./index.css"

class Person extends Component {
  addPerson = (event) => {
    const { target, keyCode } = event
    if (keyCode !== 13) {
      return
    }

    let { value } = target
    value = value.trim()

    if (!value) {
      alert("Name cannot be blank")
      return
    }

    const person = {
      id: nanoid(),
      name: value
    }

    console.log("person", person)

    const { addPerson } = this.props
    addPerson(person)
    target.value = ""
  }

  render() {
    console.log("person: this.props", this.props)
    const { count, list } = this.props
    return (
      <div>
        <div className="result">Sum in Count Component: {count}</div>

        <div className="input-box">
          <input type="text" placeholder="name" onKeyDown={this.addPerson} />
        </div>

        <ul>
          {list.map((el) => {
            return <li key={el.id}>{el.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
    list: state.list
  }
}

const mapDispatchToProps = {
  addPerson
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)
