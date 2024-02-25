const { Router } = require("express");
const { User } = require("../models/user.model");

const loginController = Router();

loginController.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (user)
      res.status(201).send({
        msg: "Login Successful!",
        user: { _id: user.id, username: user.username, name: user.name }
      });
    else res.status(404).send({ msg: "User not exist!" });
  } catch (error) {
    res.status(500).send({ msg: "Something Went Wrong!" });
  }
});

module.exports = { loginController };
