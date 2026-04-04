const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllTopics, getTopicById } = require('../controllers/systemDesignController');

router.get('/', auth, getAllTopics);
router.get('/:id', auth, getTopicById);

module.exports = router;
