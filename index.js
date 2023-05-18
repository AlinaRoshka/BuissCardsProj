const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const register = require("./routes/register");
const login = require("./routes/login");
const profile = require("./routes/profile");
const cards = require("./routes/cards");

const PORT = process.env.PORT || 6000;
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/profile", profile);
app.use("/api/cards", cards);

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => console.log("Server started on port", PORT));
