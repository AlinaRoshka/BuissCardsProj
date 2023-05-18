const express = require("express");
const { User } = require("../models/User");
const auth = require("../middlewares/auth");
const joi = require("joi");
const _ = require("lodash");
const router = express.Router();

const ProfileSchema = joi.object({
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

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.payload._id);
    res
      .status(200)
      .send(
        _.pick(user, [
          "_id",
          "name",
          "email",
          "biz",
          "country",
          "city",
          "street",
          "houseNumber",
          "phone",
          "imgUrl",
          "imgAlt",
        ])
      );
  } catch (err) {
    res.status(400).send("ERROR in GET User Profile");
  }
});

// Put Specific Card whos belong to Specific User:
router.put("/:id", auth, async (req, res) => {
  try {
    // Joi Validation:
    const { error } = ProfileSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOneAndUpdate(
      { _id: req.params.id, user_id: req.payload._id },
      req.body,
      { new: true }
    );
    if (!user) return res.status(400).send("User was not found");
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send("ERROR in PUT User");
  }
});

// Add a card to a user's favorites
router.post("/:userId/favorites", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).send("User not found");

    // Check if the card already exists in favorites
    if (user.favorites.includes(req.body.cardId)) {
      return res.status(400).send("Card is already in favorites");
    }

    // add the card to favorites
    user.favorites.push(req.body.cardId);

    // save the updated user
    await user.save();

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send("An error occurred");
  }
});

// Remove a card from a user's favorites
router.delete("/:userId/favorites/:cardId", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).send("User not found");

    // convert cardId to string
    const cardIdString = req.params.cardId
      ? req.params.cardId.toString()
      : null;

    // remove the card from favorites
    user.favorites = user.favorites.filter(
      (cardId) => cardId && cardId.toString() !== cardIdString
    );

    // save the updated user
    const updatedUser = await user.save();

    res.status(200).send(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred");
  }
});

// Get all favorite cards of a user
router.get("/:userId/favorites", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).send("User not found");

    res.status(200).send(user.favorites);
  } catch (err) {
    res.status(500).send("An error occurred");
  }
});

module.exports = router;
