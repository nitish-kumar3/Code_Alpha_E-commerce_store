// const express = require("express");
// const router = express.Router();
// const Order = require("../models/Order");

// router.post("/", async (req, res) => {
//   const order = new Order({ items: req.body.items });
//   await order.save();
//   res.json({ message: "Order placed" });
// });

// module.exports = router;



const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Place an order
router.post("/", async (req, res) => {
  const { items } = req.body;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const order = new Order({ items, total });
  await order.save();

  res.json({ message: "Order placed successfully!", order });
});

// Get all orders
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;