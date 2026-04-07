const Progress = require('../models/Progress');
const Roadmap = require('../models/Roadmap');
const ActivityLog = require('../models/ActivityLog');
const { getRecommendations } = require('../services/recommendationEngine');
const mongoose = require('mongoose');

/**
 * GET /api/analytics/overview
 * Returns overall stats: completion %, total time, streak info.
 */
exports.getOverview = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get all progress documents for this user
    const allProgress = await Progress.find({ userId }).lean();
    const roadmapIds = allProgress.map((p) => p.roadmapId);
    const roadmaps = await Roadmap.find({ _id: { $in: roadmapIds } }).lean();

    let totalTopics = 0;
    let completedTopics = 0;
    let totalTimeSpent = 0;

    roadmaps.forEach((roadmap) => {
      const progress = allProgress.find(
        (p) => p.roadmapId.toString() === roadmap._id.toString()
      );
      const topicCount = roadmap.sections.reduce((sum, s) => sum + s.topics.length, 0);
      totalTopics += topicCount;
      if (progress) {
        // Count unique completed topics (not subtopics)
        const uniqueTopics = new Set(
          progress.completed
            .filter((c) => !c.subtopicId)
            .map((c) => c.topicId.toString())
        );
        completedTopics += uniqueTopics.size;
        totalTimeSpent += progress.completed.reduce((sum, c) => sum + (c.timeSpentMinutes || 0), 0);
      }
    });

    // Calculate streak from activity logs
    const activities = await ActivityLog.find({ userId })
      .sort({ date: -1 })
      .limit(60)
      .lean();

    const streak = calculateStreak(activities);

    res.json({
      totalTopics,
      completedTopics,
      completionPercentage: totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0,
      totalTimeSpentMinutes: totalTimeSpent,
      currentStreak: streak.current,
      longestStreak: streak.longest,
      roadmapsInProgress: allProgress.length,
    });
  } catch (error) {
    console.error('GetOverview error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * GET /api/analytics/weaknesses
 * Returns all weak areas across the user's roadmaps.
 */
exports.getWeaknesses = async (req, res) => {
  try {
    const allProgress = await Progress.find({ userId: req.user.id }).lean();
    const roadmapIds = allProgress.map((p) => p.roadmapId);
    const roadmaps = await Roadmap.find({ _id: { $in: roadmapIds } }).lean();

    const weaknesses = [];
    allProgress.forEach((progress) => {
      const roadmap = roadmaps.find(
        (r) => r._id.toString() === progress.roadmapId.toString()
      );
      if (progress.weakAreas && progress.weakAreas.length > 0) {
        weaknesses.push({
          roadmapTitle: roadmap?.title || 'Unknown',
          roadmapId: progress.roadmapId,
          weakAreas: progress.weakAreas,
        });
      }
    });

    res.json(weaknesses);
  } catch (error) {
    console.error('GetWeaknesses error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * GET /api/analytics/recommendations
 * Returns AI-based (rule-based) recommendations for next and revision topics.
 */
exports.getRecommendationsHandler = async (req, res) => {
  try {
    const allProgress = await Progress.find({ userId: req.user.id }).lean();
    const roadmapIds = allProgress.map((p) => p.roadmapId);
    const roadmaps = await Roadmap.find({ _id: { $in: roadmapIds } }).lean();

    const recommendations = getRecommendations(allProgress, roadmaps);
    res.json(recommendations);
  } catch (error) {
    console.error('GetRecommendations error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * GET /api/analytics/activity
 * Returns daily activity data for the last 30 days (for the activity graph).
 */
exports.getActivity = async (req, res) => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    thirtyDaysAgo.setHours(0, 0, 0, 0);

    const activities = await ActivityLog.find({
      userId: req.user.id,
      date: { $gte: thirtyDaysAgo },
    })
      .sort({ date: 1 })
      .lean();

    // Fill in missing days with zero activity
    const result = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let d = new Date(thirtyDaysAgo); d <= today; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      const activity = activities.find(
        (a) => new Date(a.date).toISOString().split('T')[0] === dateStr
      );
      result.push({
        date: dateStr,
        topicsCompleted: activity?.topicsCompleted || 0,
        minutesSpent: activity?.minutesSpent || 0,
      });
    }

    res.json(result);
  } catch (error) {
    console.error('GetActivity error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * Calculate current and longest streak from activity logs.
 * A streak is consecutive days with at least 1 topic completed.
 */
function calculateStreak(activities) {
  if (!activities || activities.length === 0) {
    return { current: 0, longest: 0 };
  }

  // Sort by date descending (most recent first)
  const sorted = activities
    .filter((a) => a.topicsCompleted > 0)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (sorted.length === 0) return { current: 0, longest: 0 };

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 1;

  // Check if the most recent activity is today or yesterday
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const mostRecent = new Date(sorted[0].date);
  mostRecent.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((now - mostRecent) / (1000 * 60 * 60 * 24));

  if (diffDays > 1) {
    currentStreak = 0;
  } else {
    currentStreak = 1;
  }

  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1].date);
    const curr = new Date(sorted[i].date);
    prev.setHours(0, 0, 0, 0);
    curr.setHours(0, 0, 0, 0);
    const gap = Math.floor((prev - curr) / (1000 * 60 * 60 * 24));

    if (gap === 1) {
      tempStreak++;
      if (i <= currentStreak || currentStreak > 0) {
        currentStreak = tempStreak;
      }
    } else {
      tempStreak = 1;
    }
    longestStreak = Math.max(longestStreak, tempStreak);
  }

  longestStreak = Math.max(longestStreak, currentStreak);

  return { current: currentStreak, longest: longestStreak };
}
