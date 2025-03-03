const Response = require("../models/response.model").model;

const insertReponse = async (req, res) => {
  try {
    console.log("req.body", req.body.question);
    const newResponse = await Response.create({
      questions: req.body.question,
    });
    res.status(201).json(newResponse);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message || error,
    });
    console.log(error);
  }
};

module.exports.insertReponse = insertReponse;
