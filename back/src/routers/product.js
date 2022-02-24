const express = require("express");
const Product = require("../models/product");
const router = new express.Router();
const auth = require("../middleware/auth");

router.post("/products", auth, async (req, res) => {
  const product = new Product({ ...req.body, owner: req.user._id });

  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/products", auth, async (req, res) => {
  try {
    await req.user.populate("products");
    res.send(req.user.products);
  } catch (e) {
    res.status(500).send();
    console.log(e);
  }
});

router.get("/products/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    // const product = await product.findById(_id);

    const product = await Product.findOne({ _id, owner: req.user._id });

    if (!product) {
      return res.status(404).send();
    }

    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/products/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "title", "price", "items", "image"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const product = await Product.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    // const product = await product.findById(req.params.id);

    if (!product) {
      return res.status(404).send();
    }
    updates.forEach((update) => (product[update] = req.body[update]));
    await product.save();

    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/products/", auth, async (req, res) => {
  try {
    // const product = await product.findByIdAndDelete(req.params.id);
    const product = await Product.deleteMany();

    if (!product) {
      res.status(404).send();
    }

    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
});
router.delete("/products/:id", auth, async (req, res) => {
  try {
    // const product = await product.findByIdAndDelete(req.params.id);
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!product) {
      res.status(404).send();
    }

    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
