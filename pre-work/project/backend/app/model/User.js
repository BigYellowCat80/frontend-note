const mongoose = require("mongoose")
const { Schema, model } = mongoose

const UserSchema = new Schema({
  username: { type: String, require: true },
  referCode: { type: String, require: true }
})

const User = model("User", UserSchema)
module.exports = User
