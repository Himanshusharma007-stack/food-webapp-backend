const express = require("express");
const FoodItems = require("../models/foodItem");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/getFoodItems", async (req, res) => {
  try {
    let data = await FoodItems.find({});
    res.send({ data, success: true, msg: "Successfully fetched..." });
  } catch (error) {
    console.error("Error ---> ", error);
    res.status(500).send({ success: false, msg: "Error fetching data" });
  }
});

module.exports = router;
