const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  cards: [
    {
      cardId: String,
      name: String,
      address: String,
      description: String,
      phone: String,
      logo: String,
      backgroundImg: String,
      cardNumber: Number,
    },
  ],
  active: {
    type: Boolean,
    required: true,
  },
});

const Cart = mongoose.model("carts", cartSchema);
module.exports = { Cart };