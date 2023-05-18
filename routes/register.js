const express = require("express");
const bcrypt = require("bcrypt");
const joi = require("joi");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const { Cart } = require("../models/Cart");

const router = express.Router();

const registerSchema = joi.object({
  name: joi.string().required().min(2).max(1024),
  email: joi.string().required().min(5).max(1024).email(),
  password: joi.string().required().min(6).max(1024),
  biz: joi.boolean().required(),
  country: joi.string().required().min(4).max(35),
  city: joi.string().required().min(4).max(35),
  street: joi.string().required().min(4).max(35),
  houseNumber: joi.string().required().min(1).max(1024),
  phone: joi.string().required().max(10).min(9),
  imgUrl: joi.string(),
  imgAlt: joi.string(),
});

router.post("/", async (req, res) => {
  try {
    // Joi Validation:
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).send(error);
    console.log(error);

    // Check if user already exist:
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already exist in DataBase");

    // Create new User:
    user = new User(req.body);

    // Encryption password in DataBase:
    let salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    //create cart for user
    let cart = new Cart({ userId: user._id, cards: [], active: true });
    await cart.save();

    

    // Provide and Show Token:
    const gentoken = jwt.sign(
      { _id: user._id, biz: user.biz },
      process.env.secretKey
    );
    await user.save();
    res.status(201).send({ token: gentoken });
    console.log(gentoken);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
