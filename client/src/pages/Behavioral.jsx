import { useState, useEffect } from 'react';
import api from '../api/axios';

export default function Behavioral() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const queryParams = filter ? `?category=${encodeURIComponent(filter)}` : '';
        const res = await api.get(`/behavioral${queryParams}`);
        setQuestions(res.data);
      } catch (err) {
        console.error('Failed to fetch behavioral questions:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [filter]);

  if (loading) return <div className="skeleton h-[600px] w-full rounded-2xl" />;

  // Get unique categories for the filter
  const categories = [...new Set(questions.map(q => q.category))];

  return (
    <div className="max-w-4xl mx-auto space-y-8 fade-in">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-white mb-2">Behavioral Questions</h1>
        <p className="text-dark-400">Master the STAR method and prepare for cultural fit interviews.</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        <button 
          onClick={() => setFilter('')} 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === '' ? 'bg-primary-600 text-white' : 'bg-dark-800 text-dark-300 hover:bg-dark-700'}`}
        >
          All
        </button>
        {categories.map(c => (
          <button 
            key={c}
            onClick={() => setFilter(c)} 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === c ? 'bg-primary-600 text-white' : 'bg-dark-800 text-dark-300 hover:bg-dark-700'}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q._id} className="glass-card overflow-hidden transition-all duration-300">
            <button
              onClick={() => setExpandedId(expandedId === q._id ? null : q._id)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-dark-800/30 text-left"
            >
              <div>
                <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-2 block">{q.category}</span>
                <h3 className="text-lg font-medium text-white">{q.question}</h3>
              </div>
              <span className={`text-2xl text-dark-400 transition-transform duration-300 ${expandedId === q._id ? 'rotate-180' : ''}`}>
                ⌄
              </span>
            </button>
            
            {expandedId === q._id && (
              <div className="px-6 pb-6 pt-2 border-t border-dark-700/50 bg-dark-900/30">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-dark-300 mb-2 uppercase">Tips</h4>
                  <ul className="list-disc list-inside text-sm text-dark-200 space-y-1 ml-1">
                    {q.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-dark-300 mb-2 uppercase">Sample Answer (STAR)</h4>
                  <div className="p-4 rounded-xl bg-dark-800 text-sm text-dark-200 leading-relaxed border border-dark-700 font-mono">
                    {q.sampleAnswer.split('\n').map((line, i) => (
                      <p key={i} className="mb-2 last:mb-0">
                        {line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {questions.length === 0 && (
          <div className="text-center py-12 text-dark-400">No questions found for this category.</div>
        )}
      </div>
    </div>
  );
}
