import { useState, useEffect } from 'react';
import api from '../api/axios';
import ActivityGraph from '../components/ActivityGraph';
import WeaknessPanel from '../components/WeaknessPanel';
import RecommendationCard from '../components/RecommendationCard';
import { useAuth } from '../context/AuthContext';

/**
 * Dashboard – Analytics overview page showing stats, activity graph,
 * weakness panel, and AI recommendations.
 */
export default function Dashboard() {
  const { user } = useAuth();
  const [overview, setOverview] = useState(null);
  const [activity, setActivity] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ovRes, actRes, weakRes, recRes] = await Promise.all([
          api.get('/analytics/overview'),
          api.get('/analytics/activity'),
          api.get('/analytics/weaknesses'),
          api.get('/analytics/recommendations'),
        ]);
        setOverview(ovRes.data);
        setActivity(actRes.data);
        setWeaknesses(weakRes.data);
        setRecommendations(recRes.data);
      } catch (err) {
        console.error('Dashboard fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="skeleton h-8 w-64" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => <div key={i} className="skeleton h-28 rounded-2xl" />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="skeleton h-48 rounded-2xl" />
          <div className="skeleton h-48 rounded-2xl" />
        </div>
      </div>
    );
  }

  const stats = [
    {
      label: 'Completion',
      value: `${overview?.completionPercentage || 0}%`,
      icon: '🎯',
      color: 'from-primary-600/20 to-primary-800/20',
      border: 'border-primary-500/20',
    },
    {
      label: 'Time Spent',
      value: `${Math.round((overview?.totalTimeSpentMinutes || 0) / 60)}h`,
      icon: '⏱️',
      color: 'from-emerald-600/20 to-emerald-800/20',
      border: 'border-emerald-500/20',
    },
    {
      label: 'Current Streak',
      value: `${overview?.currentStreak || 0} days`,
      icon: '🔥',
      color: 'from-amber-600/20 to-amber-800/20',
      border: 'border-amber-500/20',
    },
    {
      label: 'Roadmaps',
      value: overview?.roadmapsInProgress || 0,
      icon: '🗺️',
      color: 'from-violet-600/20 to-violet-800/20',
      border: 'border-violet-500/20',
    },
  ];

  return (
    <div className="space-y-8 fade-in">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-dark-100">
          Welcome back, <span className="gradient-text">{user?.name}</span> 👋
        </h1>
        <p className="text-dark-400 mt-1">Here's your learning progress overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`glass-card p-5 bg-gradient-to-br ${stat.color} border ${stat.border} fade-in`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-dark-400 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-bold text-dark-100 mt-1">{stat.value}</p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Completion Ring + Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Ring */}
        <div className="glass-card p-6 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-dark-200 mb-4 self-start">📊 Overall Progress</h3>
          <div className="relative w-40 h-40">
            <svg className="progress-ring w-full h-full" viewBox="0 0 120 120">
              <circle
                className="text-dark-700"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
              />
              <circle
                className="text-primary-500 progress-ring__circle"
                strokeWidth="8"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
                strokeDasharray={`${2 * Math.PI * 52}`}
                strokeDashoffset={`${2 * Math.PI * 52 * (1 - (overview?.completionPercentage || 0) / 100)}`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-dark-100">{overview?.completionPercentage || 0}%</span>
              <span className="text-xs text-dark-400">completed</span>
            </div>
          </div>
          <p className="text-dark-400 text-sm mt-4">
            {overview?.completedTopics || 0} of {overview?.totalTopics || 0} topics finished
          </p>
        </div>

        {/* Recommendations */}
        <RecommendationCard recommendations={recommendations} />
      </div>

      {/* Activity Graph + Weaknesses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityGraph data={activity} />
        <WeaknessPanel weaknesses={weaknesses} />
      </div>
    </div>
  );
}
