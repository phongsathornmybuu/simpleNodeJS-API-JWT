const mongoose = require("mongoose");

const vaccineSchema = new mongoose.Schema({
  user_id: {type: String, default: null},
  date: {type: String},
});

module.exports = mongoose.model("vaccine", vaccineSchema);
