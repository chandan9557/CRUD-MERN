const mongoose = require("mongoose");

const UserSchema =new mongoose.Schema({
  username:String,
  age: Number,
  city: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
