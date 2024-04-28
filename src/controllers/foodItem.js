const FoodItems = require("../models/foodItem");

async function getAllfoodItems(req, res) {
  try {
    let data = await FoodItems.find({});
    res.send({ data, success: true, msg: "Successfully fetched..." });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { getAllfoodItems };
