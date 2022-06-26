import React, { useState } from "react"
import { nanoid } from "nanoid"

import "./index.css"
import Header from "./header"
import List from "./list"
import Footer from "./footer"

export default function ToDoList() {
  let [list, setList] = useState([
    {
      id: nanoid(),
      value: "eat",
      done: false
    },
    {
      id: nanoid(),
      value: "sleep",
      done: true
    },
    {
      id: nanoid(),
      value: "jump",
      done: false
    }
  ])

  function add(item) {
    list = [item, ...list]
    setList(list)
  }

  function del(id) {
    list = list.filter((el) => el.id !== id)
    setList(list)
  }

  function delAllDone() {
    list = list.filter((el) => !el.done)
    setList(list)
  }

  function changeDone(item) {
    const { id, done } = item
    list = list.map((el) => {
      if (el.id === id) {
        return { ...el, done }
      } else {
        return el
      }
    })
    setList(list)
  }

  function changeAllDone(done) {
    console.log("done", done)
    list = list.map((el) => {
      return { ...el, done }
    })
    setList(list)
  }

  return (
    <div className="container">
      <Header add={add} />
      <List list={list} del={del} changeDone={changeDone} />
      <Footer
        list={list}
        delAllDone={delAllDone}
        changeAllDone={changeAllDone}
      />
    </div>
  )
}
