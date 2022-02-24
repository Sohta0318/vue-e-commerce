const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  items: {
    type: Number,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
