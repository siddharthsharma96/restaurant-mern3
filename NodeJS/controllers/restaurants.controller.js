const restaurantModel = require("../model/restaurants.model");

exports.create = (req, res) => {
  const {
    name,
    city,
    area,
    avgRating,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    costForTwoString,
    deliveryTime,
  } = req.body;

  const newRestaurant = new restaurantModel({
    name,
    city,
    area,
    avgRating,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    costForTwoString,
    deliveryTime,
  });

  newRestaurant
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).json({ message: "sonething went wrong" });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "server not available" });
    });
};

exports.fetch = (req, res) => {
  restaurantModel
    .find()
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "server not available" });
    });
};
