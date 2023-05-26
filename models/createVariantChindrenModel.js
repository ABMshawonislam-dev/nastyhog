const mongoose = require("mongoose");
const { Schema } = mongoose;

const variantChildSchema = new Schema({
  title: {
    type: String,
  },
  sku: {
    type: String,
  },
  variant: {
    type: Schema.Types.ObjectId,
    ref: "VariantLibrary",
  },
});

module.exports = mongoose.model("VariantChild", variantChildSchema);
