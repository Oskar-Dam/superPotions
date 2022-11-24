const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/* This is creating a new schema for the potion model. */
const potionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    alias: {
      type: String,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
    curative: {
      type: Boolean,
      required: true,
    },
    mana: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Potion", potionSchema);