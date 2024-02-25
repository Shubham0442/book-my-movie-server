const { Router } = require("express");
const { Movie } = require("../models/movies.model");

const movieController = Router();

movieController.post("/add", async (req, res) => {
  try {
    const movies = await Movie.insertMany(req.body);
    res.send({ movies: req.body });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong" });
  }
});

movieController.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).send({ movies });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong" });
  }
});

module.exports = { movieController };
