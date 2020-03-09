const mongoose = require("mongoose");

const swiftSchema = mongoose.Schema({
  swift: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("swifts", swiftSchema);
