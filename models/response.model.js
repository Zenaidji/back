const mongoose = require("mongoose");
const dbConnection = require("../controllers/db.controller");
const responseSchema = new mongoose.Schema({
  questions: [
    {
      question_text: String,
      response: String,
    },
  ],
});
const Response = dbConnection.model("Response", responseSchema, "responses");
module.exports.model = Response;
