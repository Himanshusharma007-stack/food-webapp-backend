const express = require("express");
const foodItemController = require("../controllers/foodItem");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/getFoodItems", async (req, res) => {
  try {
    return await foodItemController.getAllfoodItems(req, res);
  } catch (error) {
    console.error("Error ---> ", error);
    res.status(500).send({ success: false, msg: "Error fetching data" });
  }
});

module.exports = router;
