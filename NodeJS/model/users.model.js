const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: [true, "email already exists"],
  },

  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
