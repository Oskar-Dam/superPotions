const express = require("express");

const PotionRoutes = require("./routes/potion.route");

const app = express();

/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
  res.status(200).json({ potions: "Free for All folks." });
});

/* Telling the server to use the routes in the PotionRoutes file. */
app.use("/api", PotionRoutes);

module.exports = app;
