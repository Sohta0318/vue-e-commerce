const express = require("express");
const Order = require("../models/orderHistory");
const router = new express.Router();
const auth = require("../middleware/auth");

router.post("/orders", auth, async (req, res) => {
  const order = new Order({ ...req.body, owner: req.user._id });

  try {
    await order.save();
    res.status(201).send(order);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/orders", auth, async (req, res) => {
  try {
    await req.user.populate("orders");
    res.send(req.user.orders);
  } catch (e) {
    res.status(500).send();
    console.log(e);
  }
});




module.exports = router;
