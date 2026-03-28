const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getAllRoadmaps,
  getRoadmapById,
} = require('../controllers/roadmapController');

// All roadmap routes require authentication
router.get('/', auth, getAllRoadmaps);
router.get('/:id', auth, getRoadmapById);

module.exports = router;
