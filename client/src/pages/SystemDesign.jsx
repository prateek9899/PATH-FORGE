import { useState, useEffect } from 'react';
import api from '../api/axios';

export default function SystemDesign() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTopic, setActiveTopic] = useState(null);
  const [contentLoading, setContentLoading] = useState(false);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await api.get('/system-design');
        setTopics(res.data);
      } catch (err) {
        console.error('Failed to fetch system design topics:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTopics();
  }, []);

  const fetchTopicContent = async (id) => {
    setContentLoading(true);
    try {
      const res = await api.get(`/system-design/${id}`);
      setActiveTopic(res.data);
    } catch (err) {
      console.error('Failed to fetch topic content:', err);
    } finally {
      setContentLoading(false);
    }
  };

  if (loading) return <div className="skeleton h-screen w-full rounded-2xl" />;

  const categories = [...new Set(topics.map(t => t.category))];

  return (
    <div className="flex h-[calc(100vh-8rem)] -mt-4 border border-dark-700/50 rounded-2xl overflow-hidden bg-dark-900 fade-in">
      {/* Sidebar sidebar */}
      <div className="w-80 flex-shrink-0 border-r border-dark-700/50 bg-dark-950/50 flex flex-col">
        <div className="p-6 border-b border-dark-700/50">
          <h2 className="text-xl font-bold text-white mb-2">System Design</h2>
          <p className="text-dark-400 text-sm">Master large-scale system architecture</p>
        </div>
        
        <div className="flex-1 overflow-y-auto py-2">
          {categories.map((cat, idx) => (
            <div key={idx} className="mb-6">
              <p className="px-6 py-2 text-xs font-semibold text-dark-500 uppercase tracking-wider">{cat}</p>
              {topics.filter(t => t.category === cat).map(topic => (
                <button
                  key={topic._id}
                  onClick={() => fetchTopicContent(topic._id)}
                  className={`w-full text-left px-6 py-3 text-sm transition-colors border-l-2 ${
                    activeTopic?._id === topic._id
                      ? 'bg-primary-900/10 border-primary-500 text-white' 
                      : 'border-transparent text-dark-400 hover:text-white hover:bg-dark-800'
                  }`}
                >
                  <div className="font-medium truncate">{topic.title}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      topic.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-400' :
                      topic.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-400' : 'bg-red-500/10 text-red-400'
                    }`}>
                      {topic.difficulty}
                    </span>
                    <span className="text-[10px] text-dark-500">{topic.readTime} min</span>
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-dark-900 custom-scrollbar p-10">
        {contentLoading ? (
          <div className="space-y-6">
            <div className="skeleton w-3/4 h-12" />
            <div className="skeleton w-full h-64" />
          </div>
        ) : activeTopic ? (
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-primary max-w-none prose-h1:text-3xl prose-h2:text-2xl prose-a:text-primary-400">
              {activeTopic.content.split('\n').map((line, i) => {
                if (line.startsWith('# ')) return <h1 key={i} className="font-bold mt-8 mb-6 text-white pb-4 border-b border-dark-800">{line.replace('# ', '')}</h1>;
                if (line.startsWith('## ')) return <h2 key={i} className="font-bold mt-6 mb-3 text-white">{line.replace('## ', '')}</h2>;
                if (line.trim() === '') return <br key={i} />;
                return <p key={i} className="text-dark-200 leading-relaxed mb-4">{line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>;
              })}
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-dark-400">
            <div className="text-center">
              <span className="text-4xl block mb-4">🏗️</span>
              Select a design topic to start reading
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
