/**
 * Recommendation Engine Service
 * 
 * Provides rule-based recommendations:
 * 1. Next best topic: First incomplete topic in roadmap order
 * 2. Revision topics: Completed topics marked as weak or completed > 7 days ago
 */

/**
 * Generate recommendations for a user based on their progress.
 * @param {Array} allProgress - All Progress documents for the user
 * @param {Array} roadmaps - All roadmaps the user is following
 * @returns {Object} { nextTopics: [...], revisionTopics: [...] }
 */
function getRecommendations(allProgress, roadmaps) {
  const nextTopics = [];
  const revisionTopics = [];
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  roadmaps.forEach((roadmap) => {
    const progress = allProgress.find(
      (p) => p.roadmapId.toString() === roadmap._id.toString()
    );

    const completedTopicIds = new Set(
      (progress?.completed || [])
        .filter((c) => !c.subtopicId)
        .map((c) => c.topicId.toString())
    );

    let foundNext = false;

    // Walk through sections in order to find the next incomplete topic
    for (const section of roadmap.sections) {
      for (const topic of section.topics) {
        const topicIdStr = topic._id.toString();

        if (!completedTopicIds.has(topicIdStr)) {
          // This topic is incomplete – recommend it as next
          if (!foundNext) {
            nextTopics.push({
              roadmapTitle: roadmap.title,
              roadmapId: roadmap._id,
              sectionTitle: section.title,
              topicTitle: topic.title,
              topicId: topic._id,
              difficulty: topic.difficulty,
              estimatedMinutes: topic.estimatedMinutes,
            });
            foundNext = true;
          }
        } else {
          // Topic is completed – check if it needs revision
          const completionEntry = (progress?.completed || []).find(
            (c) => c.topicId.toString() === topicIdStr && !c.subtopicId
          );

          const isWeak = (progress?.weakAreas || []).some(
            (w) => w.topicId.toString() === topicIdStr
          );

          const completedLongAgo =
            completionEntry &&
            new Date(completionEntry.completedAt) < sevenDaysAgo;

          if (isWeak || completedLongAgo) {
            revisionTopics.push({
              roadmapTitle: roadmap.title,
              roadmapId: roadmap._id,
              sectionTitle: section.title,
              topicTitle: topic.title,
              topicId: topic._id,
              reason: isWeak
                ? 'Identified as weak area'
                : 'Completed over 7 days ago',
            });
          }
        }
      }
    }
  });

  // Limit recommendations to prevent information overload
  return {
    nextTopics: nextTopics.slice(0, 5),
    revisionTopics: revisionTopics.slice(0, 10),
  };
}

module.exports = { getRecommendations };
