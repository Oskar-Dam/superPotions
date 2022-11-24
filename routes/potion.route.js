const express = require("express");

const {
  getPotions,
  getPotion,
  createPotion,
  updatePotion,
  deletePotion,
} = require("../controllers/potion.controller");

const router = express.Router();

/* Creating the routes for the potion controller. */
router.get("/potions", getPotions);

router.get("/potions/:id", getPotion);

router.post("/potions", createPotion);

router.patch("/potions/:id", updatePotion);

router.delete("/potions/:id", deletePotion);

module.exports = router;