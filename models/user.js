const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {type: String, default: null},
  last_name: {type: String, default: null},
  role: {type: String, enum: ["user", "mod", "admin"], default: "user"},
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
});

module.exports = mongoose.model("user", userSchema);
