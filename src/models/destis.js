const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destisSchema = new Schema(
  {
    desti: {
      type: String,
      required: true,
    },
    percentageMarket: {
      type: String,
      required: true,
    },
    percentageFirstPage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Destis", destisSchema);
