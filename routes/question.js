const express = require("express");
const router = express.Router();
const questionController = require("../controllers/question.controller");
router.get("/levels", questionController.getQuestionByLevel);
router.get("/", questionController.getQuestionById);
router.get("/parent", questionController.getQuestionByParentId);
router.post("/", questionController.createQuestion);
router.delete("/", questionController.deleteQuestion);

module.exports = router;
