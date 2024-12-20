const express = require("express");

const { summaryController } = require("../controllers/openaiController");

const router = express.Router();

router.post("/summary", summaryController);

module.exports = router;