const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Seed products (for testing)
router.post("/seed", async (req, res) => {
  const products = [
    { name: "Product 1", price: 10, image: "https://via.placeholder.com/150" },
    { name: "Product 2", price: 20, image: "https://via.placeholder.com/150" },
    { name: "Product 3", price: 30, image: "https://via.placeholder.com/150" },
  ];
  await Product.insertMany(products);
  res.json({ message: "Products seeded!" });
});

module.exports = router;