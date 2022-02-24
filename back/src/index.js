const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const productRouter = require("./routers/product");
const orderRouter = require("./routers/orderHistory");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const Product = require("./models/product");
// const User = require("./models/user");

// const main = async () => {
//   // const product = await Product.findById("61e7844ab785b32b2761a9b3");
//   // await product.populate("owner").execPopulate();
//   // console.log(product.owner);

//   const user = await User.findById("61ddfbddb87d53e907c6ae99");
//   await user.populate("products");
//   console.log(user.products);
//   // console.log(user);
// };

// main();
