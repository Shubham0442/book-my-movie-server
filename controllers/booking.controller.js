const { Router } = require("express");
const { Booking } = require("../models/booking.model");

const bookingController = Router();

bookingController.post("/add", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();

    res.status(200).send({ msg: "booking successfull!" });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong!" });
  }
});

bookingController.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await Booking.find({ userId });
    res.status(200).send({ bookings });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong!" });
  }
});

module.exports = { bookingController };
