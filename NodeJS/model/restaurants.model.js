const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: String,
  city: String,
  area: String,
  avgRating: String,
  cloudinaryImageId: String,
  cuisines: Array,
  costForTwo: Number,
  costForTwoString: String,
  deliveryTime: Number,
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);

module.exports = restaurantModel;
