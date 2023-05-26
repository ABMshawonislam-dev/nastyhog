const mongoose = require("mongoose");
const { Schema } = mongoose;

const variantLibrarySchema = new Schema({
  label: {
    type: String,
  },
  value: {
    type: String,
  },
  childrenId: [{ type: Schema.Types.ObjectId, ref: "VariantChild" }],
});

module.exports = mongoose.model("VariantLibrary", variantLibrarySchema);
