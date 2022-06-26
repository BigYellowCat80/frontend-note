const express = require("express")
const app = express()

app.use((request, response, next) => {
  console.log("getting data from server students")
  console.log("request from: ", request.get("Host"))
  console.log("request.url: ", request.url)
  next()
})

app.get("/students", (request, response) => {
  const students = [
    { id: "001", name: "tom", age: 18 },
    { id: "002", name: "jerry", age: 19 },
    { id: "003", name: "tony", age: 20 }
  ]
  response.send(students)
})

app.listen(5000, (err) => {
  if (!err) {
    console.log("server running on prot 5000")
    console.log("http://localhost:5000/students")
  }
})
