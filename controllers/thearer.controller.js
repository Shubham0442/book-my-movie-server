const { Router } = require("express");
const { Theater } = require("../models/theater.model");

const theaterController = Router();

theaterController.get("/", async (req, res) => {
  try {
    const theater = await Theater.find();
    res.status(200).send({ theater });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong" });
  }
});

theaterController.patch("/update", async (req, res) => {
  try {
    const { updated, userId } = req.body;
    for (let i = 0; i < updated.length; i++) {
      const updatedDSata = await Theater.findByIdAndUpdate(
        { _id: updated[i]?._id },
        { booked: true, userId: userId }
      );
    }
    res.status(201).send({ msg: "Booked seats successfully!" });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong" });
  }
});

module.exports = { theaterController };
