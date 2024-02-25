const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  movie: { type: String, required: true },
  movie_name: { type: String, required: true },
  seats: { type: Array, required: true },
  userId: { type: String, required: true },
  booked_at: { type: String, required: true }
});

const Booking = mongoose.model("booking", bookingSchema);

module.exports = { Booking };
