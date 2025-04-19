const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/ecommerce").then(async () => {
  await Product.deleteMany();
  await Product.insertMany([
    { name: "Wireless Headphones", price: 59.99 },
    { name: "Bluetooth Speaker", price: 34.99 },
    { name: "Smart Watch", price: 99.99 },
    { name: "Phone Holder", price: 14.99 },
    { name: "USB-C Cable", price: 7.99 },
    { name: "Laptop Stand", price: 25.00 }
  ]);
  console.log("Products seeded!");
  mongoose.disconnect();
});
