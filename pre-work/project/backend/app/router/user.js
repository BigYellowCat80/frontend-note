const express = require("express")
const User = require("../model/User")
const router = express.Router()

// get list
router.get("/", (req, res) => {
  new Promise((resolve, reject) => {
    resolve(User.find())
  })
    .then((list) => {
      res.send({
        code: 200,
        list
      })
    })
    .catch((reason) => {
      res.send(reason)
    })
})

// post list item
router.post("/submit", (req, res) => {
  const { username, referCode } = req.body

  new Promise((resolve, reject) => {
    resolve(new User({ username, referCode }).save())
  })
    .then((result) => {
      res.send({
        code: 200,
        data: result
      })
    })
    .catch((reason) => {
      res.send(reason)
    })
})

// delete all
router.delete("/delete-all", (req, res) => {
  const { username, referCode } = req.body

  new Promise((resolve, reject) => {
    resolve(User.deleteMany({}))
  })
    .then((result) => {
      res.send({
        code: 200,
        message: "success"
      })
    })
    .catch((reason) => {
      res.send(reason)
    })
})

module.exports = router
