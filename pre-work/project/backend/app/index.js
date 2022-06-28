const express = require("express")
const cors = require("cors")
const mongo = require("./config/db")
const routes = require("./router")
const app = new express()
const PORT = 3000

app.use(express.json())
app.use(cors())
mongo(app)
routes(app)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
