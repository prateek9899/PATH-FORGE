/**
 * Weakness Detector Service
 * 
 * Analyzes user progress to identify weak areas based on:
 * 1. Time taken exceeds 2x the estimated time for a topic
 * 2. Topics that have been uncompleted and re-completed (revisits)
 */

/**
 * Detect weaknesses from completed items against roadmap structure.
 * @param {Array} completedItems - Progress.completed array
 * @param {Object} roadmap - Full roadmap document with sections/topics
 * @returns {Array} Array of { topicId, topicTitle, reason }
 */
function detectWeaknesses(completedItems, roadmap) {
  const weakAreas = [];
  const topicMap = new Map(); // topicId -> { title, estimatedMinutes }

  // Build a map of all topics with their estimated times
  roadmap.sections.forEach((section) => {
    section.topics.forEach((topic) => {
      topicMap.set(topic._id.toString(), {
        title: topic.title,
        estimatedMinutes: topic.estimatedMinutes || 60,
      });
    });
  });

  // Group completed items by topicId to analyze patterns
  const topicCompletions = new Map(); // topicId -> [completedItems]
  completedItems.forEach((item) => {
    const key = item.topicId.toString();
    if (!topicCompletions.has(key)) {
      topicCompletions.set(key, []);
    }
    topicCompletions.get(key).push(item);
  });

  topicCompletions.forEach((items, topicIdStr) => {
    const topicInfo = topicMap.get(topicIdStr);
    if (!topicInfo) return;

    const reasons = [];

    // Check 1: Total time spent exceeds 2x the estimate
    const totalTime = items.reduce((sum, i) => sum + (i.timeSpentMinutes || 0), 0);
    if (totalTime > topicInfo.estimatedMinutes * 2) {
      reasons.push(
        `Took ${totalTime} min (estimated: ${topicInfo.estimatedMinutes} min)`
      );
    }

    // Check 2: Multiple completion entries suggest revisits
    const topicLevelItems = items.filter((i) => !i.subtopicId);
    if (topicLevelItems.length > 1) {
      reasons.push('Revisited multiple times');
    }

    if (reasons.length > 0) {
      weakAreas.push({
        topicId: topicIdStr,
        topicTitle: topicInfo.title,
        reason: reasons.join('; '),
      });
    }
  });

  return weakAreas;
}

module.exports = { detectWeaknesses };
