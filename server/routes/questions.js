const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllQuestions } = require('../controllers/questionController');

router.get('/', auth, getAllQuestions);

module.exports = router;
