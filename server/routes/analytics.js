const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getOverview,
  getWeaknesses,
  getRecommendationsHandler,
  getActivity,
} = require('../controllers/analyticsController');

// All analytics routes require authentication
router.get('/overview', auth, getOverview);
router.get('/weaknesses', auth, getWeaknesses);
router.get('/recommendations', auth, getRecommendationsHandler);
router.get('/activity', auth, getActivity);

module.exports = router;
