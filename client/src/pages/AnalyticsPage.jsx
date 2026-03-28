import { useState, useEffect } from 'react';
import api from '../api/axios';
import ActivityGraph from '../components/ActivityGraph';
import WeaknessPanel from '../components/WeaknessPanel';
import RecommendationCard from '../components/RecommendationCard';

export default function AnalyticsPage() {
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
        console.error('Analytics fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="skeleton h-[800px] w-full rounded-2xl" />;
  }

  return (
    <div className="space-y-8 fade-in">
      <div className="flex border-b border-dark-700/50 pb-6 mb-8 justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-3xl">📊</span>
            Advanced Analytics
          </h1>
          <p className="text-dark-400">Deep dive into your learning metrics and performance.</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Current Streak</p>
          <p className="text-3xl font-black text-white">{overview?.currentStreak || 0} 🔥</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Topics Mapped', value: overview?.totalTopics || 0, color: 'text-blue-400' },
          { label: 'Topics Completed', value: overview?.completedTopics || 0, color: 'text-emerald-400' },
          { label: 'Time Invested', value: `${Math.round((overview?.totalTimeSpentMinutes || 0) / 60)} hrs`, color: 'text-purple-400' },
          { label: 'Longest Streak', value: `${overview?.longestStreak || 0} days`, color: 'text-amber-400' }
        ].map((stat, i) => (
          <div key={i} className="glass-card p-6">
            <p className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-2">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityGraph data={activity} />
        </div>
        <div>
           <RecommendationCard recommendations={recommendations} />
        </div>
      </div>

      <div className="grid grid-cols-1 mt-6">
        <WeaknessPanel weaknesses={weaknesses} />
      </div>
    </div>
  );
}
