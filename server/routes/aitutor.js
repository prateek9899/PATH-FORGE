const express = require("express");
const router = express.Router();

const { chatWithTutor } = require("../controllers/aiControllers");

router.post("/chat", chatWithTutor);

module.exports = router;