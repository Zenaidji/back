const mongoose = require("mongoose");
const dbConnection = require("./controllers/db.controller").dbConnection;
const responseSchema = new mongoose.Schema({
  client_id: mongoose.Schema.Types.ObjectId,
  questions: [
    {
      question_text: String,
      question_id: mongoose.Schema.Types.ObjectId,
      response: String,
      response_id: mongoose.Schema.Types.ObjectId,
    },
  ],
});
const Response = dbConnection.model("Response", responseSchema, "responses");
module.exports = Response;
