import { useState } from 'react';

/**
 * RoadmapStepper – Renders the roadmap sections/topics/subtopics in an
 * accordion / stepper format with completion checkboxes.
 */
export default function RoadmapStepper({ roadmap, progress, onToggleTopic, onToggleSubtopic }) {
  const [expandedSections, setExpandedSections] = useState(new Set([0]));
  const [expandedTopics, setExpandedTopics] = useState(new Set());

  const toggleSection = (index) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  const toggleTopic = (topicId) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      next.has(topicId) ? next.delete(topicId) : next.add(topicId);
      return next;
    });
  };

  const isTopicCompleted = (topicId) => {
    return progress?.completed?.some(
      (c) => c.topicId === topicId && !c.subtopicId
    );
  };

  const isSubtopicCompleted = (topicId, subtopicId) => {
    return progress?.completed?.some(
      (c) => c.topicId === topicId && c.subtopicId === subtopicId
    );
  };

  const getSectionProgress = (section) => {
    const total = section.topics.length;
    const completed = section.topics.filter((t) => isTopicCompleted(t._id)).length;
    return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-emerald-400 bg-emerald-500/10';
      case 'intermediate': return 'text-amber-400 bg-amber-500/10';
      case 'advanced': return 'text-red-400 bg-red-500/10';
      default: return 'text-dark-400 bg-dark-700';
    }
  };

  return (
    <div className="space-y-4">
      {roadmap.sections.map((section, si) => {
        const prog = getSectionProgress(section);
        const isExpanded = expandedSections.has(si);

        return (
          <div key={section._id} className="glass-card overflow-hidden fade-in" style={{ animationDelay: `${si * 80}ms` }}>
            {/* Section Header */}
            <button
              onClick={() => toggleSection(si)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-dark-800/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className={`text-lg transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
                  ▶
                </span>
                <div className="text-left">
                  <h3 className="text-base font-semibold text-dark-100">
                    {section.title}
                  </h3>
                  <p className="text-xs text-dark-400 mt-0.5">
                    {prog.completed}/{prog.total} topics · {prog.percentage}% complete
                  </p>
                </div>
              </div>
              {/* Mini progress bar */}
              <div className="w-24 h-1.5 bg-dark-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full transition-all duration-500"
                  style={{ width: `${prog.percentage}%` }}
                />
              </div>
            </button>

            {/* Section Content */}
            {isExpanded && (
              <div className="border-t border-dark-700/50 px-6 py-4 space-y-3">
                {section.topics.map((topic) => {
                  const topicDone = isTopicCompleted(topic._id);
                  const isTopicExpanded = expandedTopics.has(topic._id);

                  return (
                    <div key={topic._id} className="rounded-xl border border-dark-700/50 overflow-hidden">
                      {/* Topic row */}
                      <div className="flex items-center gap-3 px-4 py-3 bg-dark-800/30">
                        <button
                          onClick={() => onToggleTopic(topic._id, topicDone)}
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                            topicDone
                              ? 'bg-primary-600 border-primary-600 text-white'
                              : 'border-dark-500 hover:border-primary-400'
                          }`}
                        >
                          {topicDone && (
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>

                        <button
                          onClick={() => toggleTopic(topic._id)}
                          className="flex-1 flex items-center justify-between min-w-0"
                        >
                          <span className={`text-sm font-medium truncate ${topicDone ? 'text-dark-400 line-through' : 'text-dark-200'}`}>
                            {topic.title}
                          </span>
                          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyColor(topic.difficulty)}`}>
                              {topic.difficulty}
                            </span>
                            <span className="text-dark-500 text-xs">{topic.estimatedMinutes}m</span>
                            {topic.subtopics?.length > 0 && (
                              <span className={`text-xs transition-transform duration-200 ${isTopicExpanded ? 'rotate-90' : ''}`}>
                                ▶
                              </span>
                            )}
                          </div>
                        </button>
                      </div>

                      {/* Topic Content & Subtopics */}
                      {isTopicExpanded && (
                        <div className="border-t border-dark-700/30 bg-dark-900/30 px-4 py-3 space-y-4">
                          {(topic.notes || topic.youtubeLink) && (
                            <div className="pl-4 border-l-2 border-primary-500/50 space-y-3 mb-3">
                               {topic.youtubeLink && (
                                 <a href={topic.youtubeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-bold rounded hover:bg-red-500/20 transition-colors">
                                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                                   Watch Tutorial
                                 </a>
                               )}
                               {topic.notes && (
                                 <div className="text-sm text-dark-300 leading-relaxed whitespace-pre-wrap">
                                   {topic.notes}
                                 </div>
                               )}
                            </div>
                          )}

                          {topic.subtopics?.length > 0 && (
                            <div className="space-y-1 mt-2">
                              {topic.subtopics.map((sub) => {
                                const subDone = isSubtopicCompleted(topic._id, sub._id);
                                return (
                                  <div key={sub._id} className="flex items-center gap-3 py-1.5 pl-4">
                                    <button
                                      onClick={() => onToggleSubtopic(topic._id, sub._id, subDone)}
                                      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                                        subDone
                                          ? 'bg-primary-600/80 border-primary-600/80 text-white'
                                          : 'border-dark-600 hover:border-primary-400'
                                      }`}
                                    >
                                      {subDone && (
                                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                      )}
                                    </button>
                                    <span className={`text-xs ${subDone ? 'text-dark-500 line-through' : 'text-dark-300'}`}>
                                      {sub.title}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
