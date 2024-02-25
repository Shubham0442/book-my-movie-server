const mongoose = require("mongoose");

const theaterSchema = mongoose.Schema({
  row: { type: String, required: true },
  seat: { type: Number, required: true },
  userId: { type: String, required: false },
  booked: { type: Boolean, default: false }
});

const Theater = mongoose.model("theater", theaterSchema);

module.exports = { Theater };
