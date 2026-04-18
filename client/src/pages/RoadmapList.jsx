import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

/**
 * RoadmapList – Grid view of all available roadmaps with progress badges.
 */
export default function RoadmapList() {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const res = await api.get('/roadmaps');
        setRoadmaps(res.data);
      } catch (err) {
        console.error('Failed to fetch roadmaps:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchRoadmaps();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="skeleton h-8 w-48" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => <div key={i} className="skeleton h-48 rounded-2xl" />)}
        </div>
      </div>
    );
  }

  const domainGradients = {
    'DSA': 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20 hover:border-cyan-500/40',
    'MERN': 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/40',
    'Java Backend': 'from-orange-500/10 to-red-500/10 border-orange-500/20 hover:border-orange-500/40',
    'Data Science': 'from-violet-500/10 to-purple-500/10 border-violet-500/20 hover:border-violet-500/40',
    'Ethical Hacking': 'from-red-500/10 to-rose-500/10 border-red-500/20 hover:border-red-500/40',
    'Frontend': 'from-pink-500/10 to-fuchsia-500/10 border-pink-500/20 hover:border-pink-500/40',
    'Backend': 'from-amber-500/10 to-yellow-500/10 border-amber-500/20 hover:border-amber-500/40',
    'Software Engineering': 'from-sky-500/10 to-indigo-500/10 border-sky-500/20 hover:border-sky-500/40',
    'DevOps': 'from-lime-500/10 to-green-500/10 border-lime-500/20 hover:border-lime-500/40',
  };

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-2xl font-bold text-dark-100">🗺️ Learning Roadmaps</h1>
        <p className="text-dark-400 mt-1">Choose a structured path and start mastering a skill</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roadmaps.map((roadmap, i) => (
          <Link
            key={roadmap._id}
            to={`/roadmaps/${roadmap._id}`}
            className={`glass-card p-6 bg-gradient-to-br ${domainGradients[roadmap.domain] || ''} border transition-all duration-300 hover:shadow-lg group fade-in`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">{roadmap.icon}</span>
              <span className="text-xs px-3 py-1 rounded-full bg-dark-700/50 text-dark-300 font-medium">
                {roadmap.domain}
              </span>
            </div>
            <h2 className="text-xl font-bold text-dark-100 group-hover:text-primary-400 transition-colors">
              {roadmap.title}
            </h2>
            <p className="text-dark-400 text-sm mt-2 line-clamp-2">
              {roadmap.description}
            </p>
            <div className="flex items-center gap-4 mt-4 text-xs text-dark-500">
              <span>📂 {roadmap.sectionCount} sections</span>
              <span>📝 {roadmap.topicCount} topics</span>
              <span>📎 {roadmap.subtopicCount} subtopics</span>
            </div>
            <div className="mt-4 flex items-center text-primary-400 text-sm font-medium group-hover:gap-2 transition-all">
              Start Learning
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
