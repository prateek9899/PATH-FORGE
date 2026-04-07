const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllModules, getChapter } = require('../controllers/fundamentalController');

router.get('/', auth, getAllModules);
router.get('/:moduleSlug/:chapterIndex', auth, getChapter);

module.exports = router;
