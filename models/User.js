const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  biz: {
    type: Boolean,
    required: true,
  },
  favorites: [
    {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Card",
      default: [],
    },
  ],
});

const User = mongoose.model("users", UserSchema);
module.exports = { User };
