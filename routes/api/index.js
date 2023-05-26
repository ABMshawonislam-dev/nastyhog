const express = require("express");
const _ = express.Router();

const productRoutes = require("./productRoutes.js");
const variantLibrary = require("./variantLibrary.js");

// auth routes

_.use("/product", productRoutes);
_.use("/variantLibrary", variantLibrary);

module.exports = _;
