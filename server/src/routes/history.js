const express = require("express");

const router = express.Router();

const historyController = require("../controllers/history");

router.post("/", historyController.searchHistory);
router.get("/", historyController.getAllHistory);

module.exports = router;
