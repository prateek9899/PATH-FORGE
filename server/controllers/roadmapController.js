const Roadmap = require('../models/Roadmap');

/**
 * GET /api/roadmaps
 * List all available roadmaps (without full topic/subtopic details for performance).
 */
exports.getAllRoadmaps = async (req, res) => {
  try {
    const roadmaps = await Roadmap.find()
      .select('title slug description domain icon')
      .lean();

    // Add section/topic counts for each roadmap
    const roadmapsWithCounts = await Promise.all(
      roadmaps.map(async (rm) => {
        const full = await Roadmap.findById(rm._id).lean();
        const totalTopics = full.sections.reduce((sum, s) => sum + s.topics.length, 0);
        const totalSubtopics = full.sections.reduce(
          (sum, s) => sum + s.topics.reduce((tSum, t) => tSum + t.subtopics.length, 0),
          0
        );
        return {
          ...rm,
          sectionCount: full.sections.length,
          topicCount: totalTopics,
          subtopicCount: totalSubtopics,
        };
      })
    );

    res.json(roadmapsWithCounts);
  } catch (error) {
    console.error('GetAllRoadmaps error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * GET /api/roadmaps/:id
 * Get a single roadmap with full section/topic/subtopic details.
 */
exports.getRoadmapById = async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id).lean();
    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }
    res.json(roadmap);
  } catch (error) {
    console.error('GetRoadmapById error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
