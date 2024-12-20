const mongoose = require("mongoose");

const manufacturerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    country: {
      type: String
    },
  },
  { timestamps: true, id: true, strict: false }
);

const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);

module.exports = Manufacturer;
