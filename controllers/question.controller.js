const Question = require("../models/question.model").model;

const getQuestionByParentId = async (req, res) => {
  try {
    var query = {};
    var parentId = req.query.parentId;
    if (parentId.trim() === "" || parentId === null || parentId === undefined) {
      query = { parent: { $exists: false } };
    } else {
      query = { parent: parentId };
    }
    console.log("query", query);
    const questions = await Question.find(query);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message || error,
    });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const id = req.query.id;
    const questions = await Question.findById(id);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message || error,
    });
  }
};

const getQuestionByLevel = async (req, res) => {
  try {
    const level = req.query.level;
    const questions = await Question.find({ level: level });
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message || error,
    });
  }
};

const createQuestion = async (req, res) => {
  try {
    const question = req.body;
    const newQuestion = await Question.create(question);
    res.status(200).json(newQuestion);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message || error,
    });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const id = req.query.id;
    const deletedQuestion = await Question.findByIdAndDelete(id);

    if (!deletedQuestion) {
      return res.status(404).json({ message: "Question non trouvée" });
    }

    res.status(200).json({ message: "Question supprimée avec succès" });
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message || error,
    });
  }
};

module.exports.getQuestionByParentId = getQuestionByParentId;
module.exports.getQuestionById = getQuestionById;
module.exports.createQuestion = createQuestion;
module.exports.deleteQuestion = deleteQuestion;
module.exports.getQuestionByLevel = getQuestionByLevel;
