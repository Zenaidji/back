const express = require("express");
const router = express.Router();
const clientController = require("../controllers/client.controller");

router.post("/", clientController.createClient);
router.get("/", clientController.getAllClients);

router.get("/search", clientController.searchClient);
module.exports = router;
