const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { signupController } = require("./controllers/signup.controller");
const { loginController } = require("./controllers/login.controller");
const { theaterController } = require("./controllers/thearer.controller");
const { movieController } = require("./controllers/movie.controller");
const { bookingController } = require("./controllers/booking.controller");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/signup", signupController);
app.use("/login", loginController);
app.use("/theater", theaterController);
app.use("/movies", movieController);
app.use("/booking", bookingController);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`app is running on http://localhost:${PORT}`);
  } catch (error) {
    console.log("err", error);
  }
});
