const { Router } = require("express");
const { User } = require("../models/user.model");

const signupController = Router();

signupController.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send({ msg: "Signup Successful!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Something went wrong" });
  }
});

signupController.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find();
    if (allUsers.length !== 0) {
      const users = allUsers?.map((el) => {
        return { username: el.username, name: el.name };
      });
      res.status(201).send({ users });
    } else res.status(201).send({ users: [] });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong" });
  }
});

module.exports = { signupController };
