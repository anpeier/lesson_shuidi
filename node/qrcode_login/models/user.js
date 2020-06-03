const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// jwt
const UserSchema = new Schema({
  username:String,
  password: String,
  // token 在client端 localStorage.setItem()
  token: String
})

module.exports = mongoose.model('User',UserSchema)