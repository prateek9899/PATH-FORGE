const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllSheets, getSheetBySlug } = require('../controllers/sheetController');

router.get('/', auth, getAllSheets);
router.get('/:slug', auth, getSheetBySlug);

module.exports = router;
