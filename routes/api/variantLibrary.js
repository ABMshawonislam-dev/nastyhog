const express = require("express");
const _ = express.Router();
const Variant = require("../../models/variantLibrary.js");
const VariantChildren = require("../../models/createVariantChindrenModel.js");

_.post("/createvariant", async function (req, res) {
  const { label, childrenId, value } = req.body;
  console.log(label);

  await new Variant({
    label,
    value,
    childrenId,
  }).save();

  res.send({ success: "Variant Created Successfully" });
});

_.get("/signlevariant/:name", async function (req, res) {
  let data = await Variant.find({ label: req.params.name }).populate(
    "childrenId"
  );
  res.send(data);
});

_.get("/allvariant", async function (req, res) {
  let data = await Variant.find({}).populate("childrenId");
  res.send(data);
});

_.post("/createChildren", async function (req, res) {
  const { title, sku, variant } = req.body;

  let data = await new VariantChildren({
    title,
    sku,
    variant,
  }).save();

  console.log(data._id);

  let updateVariant = await Variant.findByIdAndUpdate(
    { _id: variant },
    { $push: { childrenId: data._id } },
    { new: true }
  );

  res.send({ success: "Children  Created Successfully" });
});

_.get("/allchildren", async function (req, res) {
  let data = await VariantChildren.find({}).populate("variant");
  res.send(data);
});

_.post("/editChildren", async function (req, res) {
  const { title, sku, variant } = req.body;
  let data = await VariantChildren.findOneAndUpdate(
    { _id: variant },
    { title, sku },
    { new: true }
  );

  res.send({ succes: "Edit Successfull" });
});

_.delete("/variantdelete/:id", async function (req, res) {
  console.log(req.params.id);
  await Variant.findOneAndRemove({ _id: req.params.id });
  res.send({ success: "Deleted" });
});

_.delete("/variantchilddelete/:id", async function (req, res) {
  console.log(req.params.id);
  await VariantChildren.findOneAndRemove({ _id: req.params.id });
  res.send({ success: "Deleted" });
});

module.exports = _;
