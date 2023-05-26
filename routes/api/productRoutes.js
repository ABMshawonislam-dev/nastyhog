const express = require("express");
const _ = express.Router();
const getAllProducts = require("./apiOptions/getAllProducts.js");
const axios = require("axios");
const Product = require("../../models/createProductModel.js");
const createProductToShopify = require("./apiOptions/createProductToShopify.js");

_.get("/allproducts", async function (req, res) {
  let { data } = await axios(getAllProducts());
  res.json(data);
});

_.post("/createproduct", async (req, res) => {
  const {
    title,
    body_html,
    vendor,
    product_type,
    created_at,
    updated_at,
    handle,
    status,
    tags,
    variants,
  } = req.body;

  if (variants) {

    let arrayId = [];
    variants.map(async (item) => {
      let { data } = await axios(
        createProductToShopify(
          title,
          body_html,
          vendor,
          product_type,
          created_at,
          updated_at,
          handle,
          status,
          tags,
          item
        )
      );
      arrayId.push(data.product.id);

      if (variants.length == arrayId.length) {
        let product = new Product({
          title,
          body_html,
          vendor,
          product_type,
          created_at,
          updated_at,
          handle,
          status,
          tags,
          variants: [...arrayId],
        });

        product.save();

        res.send(product);
      }
    });

    
  } else {
    let product = new Product({
      title,
      body_html,
      vendor,
      product_type,
      created_at,
      updated_at,
      handle,
      status,
      tags,
    });

    product.save();

    res.send(product);
  }

 
});

module.exports = _;
