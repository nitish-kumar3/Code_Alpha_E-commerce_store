const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce");

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
