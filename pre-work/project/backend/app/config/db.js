const mongoose = require("mongoose")
const mongoUrl = "mongodb://localhost:27017/playerList"

module.exports = (app) => {
  mongoose.connect(
    mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("mongoose connected")
    }
  )
}
