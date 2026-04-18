import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';
import RoadmapStepper from '../components/RoadmapStepper';

/**
 * RoadmapDetail – Full roadmap view with stepper, progress header, and
 * interactive topic/subtopic completion.
 */
export default function RoadmapDetail() {
  const { id } = useParams();
  const [roadmap, setRoadmap] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const [rmRes, prRes] = await Promise.all([
        api.get(`/roadmaps/${id}`),
        api.get(`/progress/${id}`),
      ]);
      setRoadmap(rmRes.data);
      setProgress(prRes.data);
    } catch (err) {
      console.error('Failed to fetch roadmap:', err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleToggleTopic = async (topicId, isCompleted) => {
    if (actionLoading) return;
    setActionLoading(true);
    try {
      const endpoint = isCompleted ? 'uncomplete' : 'complete';
      const body = { topicId, timeSpentMinutes: isCompleted ? 0 : 30 };
      const res = await api.post(`/progress/${id}/${endpoint}`, body);
      setProgress(res.data);
    } catch (err) {
      console.error('Toggle topic error:', err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleToggleSubtopic = async (topicId, subtopicId, isCompleted) => {
    if (actionLoading) return;
    setActionLoading(true);
    try {
      const endpoint = isCompleted ? 'uncomplete' : 'complete';
      const body = { topicId, subtopicId, timeSpentMinutes: isCompleted ? 0 : 10 };
      const res = await api.post(`/progress/${id}/${endpoint}`, body);
      setProgress(res.data);
    } catch (err) {
      console.error('Toggle subtopic error:', err);
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="skeleton h-8 w-64" />
        <div className="skeleton h-24 rounded-2xl" />
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => <div key={i} className="skeleton h-16 rounded-2xl" />)}
        </div>
      </div>
    );
  }

  if (!roadmap) {
    return (
      <div className="text-center py-20">
        <p className="text-dark-400 text-lg">Roadmap not found</p>
        <Link to="/roadmaps" className="btn-primary mt-4 inline-block">Back to Roadmaps</Link>
      </div>
    );
  }

  // Calculate overall progress
  const totalTopics = roadmap.sections.reduce((sum, s) => sum + s.topics.length, 0);
  const completedTopics = progress?.completed?.filter((c) => !c.subtopicId).length || 0;
  const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return (
    <div className="space-y-6 fade-in">
      {/* Back link */}
      <Link to="/roadmaps" className="text-dark-400 hover:text-dark-200 text-sm flex items-center gap-1 transition-colors">
        ← Back to Roadmaps
      </Link>

      {/* Header */}
      <div className="glass-card p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{roadmap.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-dark-100">{roadmap.title}</h1>
              <p className="text-dark-400 text-sm mt-1">{roadmap.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-2xl font-bold text-primary-400">{percentage}%</p>
              <p className="text-xs text-dark-400">{completedTopics}/{totalTopics} topics</p>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 w-full h-2 bg-dark-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Stepper */}
      <RoadmapStepper
        roadmap={roadmap}
        progress={progress}
        onToggleTopic={handleToggleTopic}
        onToggleSubtopic={handleToggleSubtopic}
      />
    </div>
  );
}
