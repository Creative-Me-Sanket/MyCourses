const mongoose = require("mongoose");
const User = require("./User");
const { ObjectId } = mongoose.Schema;
const collegeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 120,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      maxlength: 120,
      required: true,
      unique: true,
    },
    about: {
      type: String,
      maxlength: 120,
      default: "Tell me something about yourself!",
    },
    phone: {
      type: String,
      maxlength: 15,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      maxlength: 120,
    },
    hods:[{ type : ObjectId }]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("College", collegeSchema);
