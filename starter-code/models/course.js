/*jshint esversion:6 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: String,
  startingDate: Date,
  endDate: Date,
  level: String,
  avalaible: Boolean,
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;