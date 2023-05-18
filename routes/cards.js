const express = require("express");
const { Card } = require("../models/Cards");
const joi = require("joi");
const _ = require("lodash");
const auth = require("../middlewares/auth");

const router = express.Router();

const cardSchema = joi.object({
  name: joi.string().required().min(2),
  country: joi.string().required().min(4),
  city: joi.string().required().min(4),
  street: joi.string().required().min(1),
  description: joi.string().required().min(5),
  phone: joi
    .string()
    .required()
    .min(9)
    .max(10)
    .regex(/^0[2-9]\d{7,8}$/),
  logo: joi.string().required(),
  imgUrl: joi.string().required().min(4),
  imgAlt: joi.string().required().min(4).max(35),
  web: joi.string().allow("").optional(),
  isFavorite: joi.boolean().required(),
});

const genCardNumber = async () => {
  try {
    while (true) {
      let randomNumber = _.random(1000, 9999);
      let card = await Card.findOne({ cardNumber: randomNumber });
      if (!card) return randomNumber;
    }
  } catch (err) {
    throw new Error("Error generate new Card Number");
  }
};

// Post New Card:
router.post("/", auth, async (req, res) => {
  try {
    //check if the user is admin
    if (!req.payload.biz)
      return res.status(400).send("Only admin can add carts");

    // Joi Validation:
    const { error } = cardSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Provide CardNumber + user_id to each Card:
    let card = new Card(req.body);
    card.cardNumber = await genCardNumber();
    card.user_id = req.payload._id;

    // Save card to DataBase:
    await card.save();
    res.status(201).send(card);
  } catch (err) {
    console.error("post err", err.message);
    res.status(400).send("ERROR in POST New Card");
  }
});

// Get 6 Random Cards:
router.get("/random", async (req, res) => {
  try {
    let allCards = await Card.find();
    if (allCards.length == 0)
      return res.status(400).send("There are no Cards available");

    // Shuffle the cards randomly
    let shuffledCards = allCards.sort(() => Math.random() - 0.5);

    // Get the first 6 cards
    let randomCards = shuffledCards.slice(0, 6);

    res.status(200).send(randomCards);
  } catch (err) {
    res.status(400).send("ERROR in GET Random Cards");
    console.log("get random cards err" + err.message);
  }
});


// Get ALL Cards in DataBase:
router.get("/", auth, async (req, res) => {
  try {
    let allCards = await Card.find();
    if (allCards.length == 0)
      return res.status(400).send("There are no Cards here");
    res.status(200).send(allCards);
  } catch (err) {
    res.status(400).send("ERROR in GET All Cards");
    console.log("get all cards err" + err.message);
  }
});

// Get all Cards belongs to Specific User:
router.get("/my-cards", auth, async (req, res) => {
  try {
    const myCards = await Card.find({ user_id: req.payload._id });
    if (myCards.length == 0) return res.status(404).send("There are no Cards");
    res.status(200).send(myCards);
  } catch (err) {
    res.status(400).send("ERROR in GET Cards of User");
    console.log("get err" + err.message);
  }
});

///get cards by name

router.get("/search/:name", async (req, res) => {
  try {
    let cards = await Card.find({ name: { $regex: "^" + req.params.name } });
    if (!cards) return res.status(400).send("Cards were not found");
    res.status(200).send(cards);
  } catch (err) {
    res.status(400).send("ERROR in GET Cards by name");
    console.log("get cards by name err" + err.message);
  }
});

// Route to get a specific card regardless of the user
router.get("/:id", async (req, res) => {
  try {
    let card = await Card.findById(req.params.id);
    if (!card) return res.status(400).send("Card was not found");
    res.status(200).send(card);
  } catch (err) {
    res.status(400).send("ERROR in GET Specific Card");
    console.log("get specific card err" + err.message);
  }
});

// Get Specific Card whos belong to Specific User:
router.get("/user/:id", auth, async (req, res) => {
  try {
    let card = await Card.findOne({
      _id: req.params.id,
      user_id: req.payload._id,
    });
    if (!card) return res.status(400).send("Card was not found");
    res.status(200).send(card);
  } catch (err) {
    res.status(400).send("ERROR in GET Specific Card");
    console.log("get specific card err" + err.message);
  }
});

// Put Specific Card whos belong to Specific User:
router.put("/:id", auth, async (req, res) => {
  try {
    // Joi Validation:
    const { error } = cardSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let card = await Card.findOneAndUpdate(
      { _id: req.params.id, user_id: req.payload._id },
      req.body,
      { new: true }
    );
    if (!card) return res.status(400).send("Card was not found");
    res.status(200).send(card);
  } catch (err) {
    res.status(400).send("ERROR in PUT Specific Card");
    console.log("put err" + err.message);
  }
});

// Delete Specific Card whos belong to Specific User:
router.delete("/:id", auth, async (req, res) => {
  try {
    let card = await Card.findOneAndRemove({
      _id: req.params.id,
      user_id: req.payload._id,
    });
    if (!card) return res.status(400).send("Card was not found");
    res
      .status(200)
      .send(`Card number ${req.params.id} was Deleted from DataBase`);
  } catch (err) {
    res.status(400).send("ERROR in DELETE Specific Card");
    console.log("delete err" + err.message);
  }
});

module.exports = router;
