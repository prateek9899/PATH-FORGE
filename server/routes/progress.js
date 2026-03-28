const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getProgress,
  markComplete,
  markUncomplete,
} = require('../controllers/progressController');

// All progress routes require authentication
router.get('/:roadmapId', auth, getProgress);
router.post('/:roadmapId/complete', auth, markComplete);
router.post('/:roadmapId/uncomplete', auth, markUncomplete);

module.exports = router;
