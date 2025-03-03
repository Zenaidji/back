const express = require("express");
const router = express.Router();
const responseController = require("../controllers/response.controller");
router.post("/", responseController.insertReponse);
module.exports = router;
