const mongoose = require("mongoose");

const foodItemsSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
});

const FoodItems = mongoose.model("foodItem", foodItemsSchema, "foodItems");

module.exports = FoodItems;
