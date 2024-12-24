const { Schema, model } = require("mongoose");

const modelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    vclass: {
      type: String,
    },
    manufacturer: {
      type: Schema.ObjectId,
      ref: "Manufacturer",
    },
  },
  { timestamps: true, id: true }
);

const Model = model("Model", modelSchema);

module.exports = Model;
