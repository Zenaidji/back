const mongoose = require("mongoose");
const dbConnection = require("../controllers/db.controller");
const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{10}$/,
  },
  zipCode: {
    type: String,

    match: /^\d{5}$/,
  },
  email: {
    type: String,
    required: true,

    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  paymentMethod: {
    type: String,
    enum: ["online", "onSite"],
    required: true,
  },
  cgu: {
    type: Boolean,
    required: true,
  },
  pub: {
    type: Boolean,
    required: true,
  },
  rights: {
    type: Boolean,
    required: true,
  },
  response_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Response",
    required: false,
  },
});

// Export the model
const Client = dbConnection.model("Client", clientSchema, "clients");
module.exports.model = Client;
