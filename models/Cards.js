const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  country: {
    type: String,
    required: true,
    minlength: 4,
  },
  city: {
    type: String,
    required: true,
    minlength: 4,
  },
  street: {
    type: String,
    required: true,
    minlength: 4,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
  },
  phone: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 10,
  },
  logo: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    minlength: 4,
  },
  imgAlt: {
    type: String,
    minlength: 4,
  },
  cardNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  web: {
    type: String,
    required: false,
  },
  isFavorite: {
    type: Boolean,
    required: true,
  },
});

const Card = mongoose.model("cards", cardSchema);
module.exports = { Card };
