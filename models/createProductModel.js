const mongoose = require("mongoose");
const { Schema } = mongoose;

const createProductSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  body_html: {
    type: String,
    required: true,
    unique: true,
  },
  vendor: {
    type: String,
  },
  product_type: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
  },
  handle: {
    type: String,
  },
  status: {
    type: String,
    default: "active",
    enum: ["draft", "active"],
  },
  tags: {
    type: String,
  },
  variants: [String],
});

module.exports = mongoose.model("Product", createProductSchema);
