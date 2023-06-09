const mongoose = require("mongoose");
const categorySchema = require("./Category");
const { ObjectId } = mongoose.Schema;
const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 30,
      required: true,
    },
    instructor: {
      type: ObjectId,
      maxlength: 30,
      required: true,
    },

    description: {
      type: String,
      maxlength: 90,
      required: true,
    },

    category: {
      type: ObjectId,
      maxlength: 30,
      required: true,
    },

    duration: {
      type: String,
      maxlength: 30,
      required: true,
    },
    thumbnail: {
      type: String, // TODO:Upload to S3 and assign the link
      required: true,
    },
    quizGame:{
      type:Array, //Add an extra schema under course as Feedback
      default:[]
    },
    feedback:{
      type:Array, //Add an extra schema under course as Feedback
      default:[]
    },
    rating: {
      type: Number,
      maxlength: 30,
      required: true,
      default:5
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
