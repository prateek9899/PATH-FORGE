import { Link } from 'react-router-dom';

/**
 * RecommendationCard – Displays AI-recommended next topics and revision topics.
 */
export default function RecommendationCard({ recommendations }) {
  const { nextTopics, revisionTopics } = recommendations || {};

  if ((!nextTopics || nextTopics.length === 0) && (!revisionTopics || revisionTopics.length === 0)) {
    return (
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-dark-200 mb-3">🤖 AI Recommendations</h3>
        <p className="text-dark-400 text-sm">Start a roadmap to get personalized recommendations!</p>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">🤖 AI Recommendations</h3>

      {/* Next Best Topics */}
      {nextTopics && nextTopics.length > 0 && (
        <div className="mb-5">
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider mb-2">
            📍 Next Up
          </p>
          <div className="space-y-2">
            {nextTopics.map((topic, i) => (
              <Link
                key={i}
                to={`/roadmaps/${topic.roadmapId}`}
                className="flex items-center justify-between bg-emerald-500/5 border border-emerald-500/15 rounded-xl px-4 py-3 hover:border-emerald-500/30 transition-all group"
              >
                <div>
                  <p className="text-dark-200 text-sm font-medium group-hover:text-emerald-400 transition-colors">
                    {topic.topicTitle}
                  </p>
                  <p className="text-dark-500 text-xs mt-0.5">
                    {topic.roadmapTitle} → {topic.sectionTitle}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    topic.difficulty === 'beginner' ? 'bg-emerald-500/20 text-emerald-400' :
                    topic.difficulty === 'intermediate' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {topic.difficulty}
                  </span>
                  <span className="text-dark-500 text-xs">{topic.estimatedMinutes}m</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Revision Topics */}
      {revisionTopics && revisionTopics.length > 0 && (
        <div>
          <p className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-2">
            🔄 Revise
          </p>
          <div className="space-y-2">
            {revisionTopics.slice(0, 5).map((topic, i) => (
              <Link
                key={i}
                to={`/roadmaps/${topic.roadmapId}`}
                className="flex items-center justify-between bg-amber-500/5 border border-amber-500/15 rounded-xl px-4 py-3 hover:border-amber-500/30 transition-all group"
              >
                <div>
                  <p className="text-dark-200 text-sm font-medium group-hover:text-amber-400 transition-colors">
                    {topic.topicTitle}
                  </p>
                  <p className="text-dark-500 text-xs mt-0.5">{topic.reason}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
