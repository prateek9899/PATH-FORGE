const Progress = require('../models/Progress');
const Roadmap = require('../models/Roadmap');
const ActivityLog = require('../models/ActivityLog');
const { detectWeaknesses } = require('../services/weaknessDetector');

/**
 * GET /api/progress/:roadmapId
 * Get the user's progress for a specific roadmap.
 */
exports.getProgress = async (req, res) => {
  try {
    const { roadmapId } = req.params;
    let progress = await Progress.findOne({
      userId: req.user.id,
      roadmapId,
    }).lean();

    if (!progress) {
      // Return empty progress if none exists yet
      return res.json({ completed: [], weakAreas: [] });
    }

    res.json(progress);
  } catch (error) {
    console.error('GetProgress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * POST /api/progress/:roadmapId/complete
 * Mark a topic or subtopic as completed.
 * Body: { topicId, subtopicId? (optional), timeSpentMinutes }
 */
exports.markComplete = async (req, res) => {
  try {
    const { roadmapId } = req.params;
    const { topicId, subtopicId, timeSpentMinutes = 0 } = req.body;

    if (!topicId) {
      return res.status(400).json({ message: 'topicId is required' });
    }

    // Find or create progress document
    let progress = await Progress.findOne({
      userId: req.user.id,
      roadmapId,
    });

    if (!progress) {
      progress = await Progress.create({
        userId: req.user.id,
        roadmapId,
        completed: [],
        weakAreas: [],
      });
    }

    // Check if already completed
    const alreadyCompleted = progress.completed.find(
      (c) =>
        c.topicId.toString() === topicId &&
        (subtopicId ? c.subtopicId?.toString() === subtopicId : !c.subtopicId)
    );

    if (alreadyCompleted) {
      return res.status(400).json({ message: 'Already marked as completed' });
    }

    // Add completion entry
    progress.completed.push({
      topicId,
      subtopicId: subtopicId || null,
      completedAt: new Date(),
      timeSpentMinutes,
    });

    // Run weakness detection after adding completion
    const roadmap = await Roadmap.findById(roadmapId).lean();
    if (roadmap) {
      progress.weakAreas = detectWeaknesses(progress.completed, roadmap);
    }

    await progress.save();

    // Update daily activity log
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await ActivityLog.findOneAndUpdate(
      { userId: req.user.id, date: today },
      {
        $inc: {
          topicsCompleted: 1,
          minutesSpent: timeSpentMinutes,
        },
      },
      { upsert: true, new: true }
    );

    res.json(progress);
  } catch (error) {
    console.error('MarkComplete error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * POST /api/progress/:roadmapId/uncomplete
 * Remove completion for a topic or subtopic (for re-visiting).
 * Body: { topicId, subtopicId? }
 */
exports.markUncomplete = async (req, res) => {
  try {
    const { roadmapId } = req.params;
    const { topicId, subtopicId } = req.body;

    if (!topicId) {
      return res.status(400).json({ message: 'topicId is required' });
    }

    const progress = await Progress.findOne({
      userId: req.user.id,
      roadmapId,
    });

    if (!progress) {
      return res.status(404).json({ message: 'No progress found' });
    }

    // Remove the matching completion entry
    progress.completed = progress.completed.filter(
      (c) =>
        !(
          c.topicId.toString() === topicId &&
          (subtopicId ? c.subtopicId?.toString() === subtopicId : !c.subtopicId)
        )
    );

    // Re-run weakness detection
    const roadmap = await Roadmap.findById(roadmapId).lean();
    if (roadmap) {
      progress.weakAreas = detectWeaknesses(progress.completed, roadmap);
    }

    await progress.save();

    res.json(progress);
  } catch (error) {
    console.error('MarkUncomplete error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
