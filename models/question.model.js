const mongoose = require("mongoose");
const dbConnection = require("../controllers/db.controller");

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  type: { type: String, enum: ["multiple_choice", "text"], required: true },

  parent: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  icon: { type: String, default: "" },
  level: { type: String, default: "" },
  label: { type: String, default: "" },
});

const Question = dbConnection.model("Question", questionSchema, "questions");
module.exports.model = Question;
