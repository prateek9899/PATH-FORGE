import { useState, useEffect } from 'react';
import api from '../api/axios';

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ difficulty: '', pattern: '' });

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const queryParams = new URLSearchParams();
        if (filters.difficulty) queryParams.append('difficulty', filters.difficulty);
        if (filters.pattern) queryParams.append('pattern', filters.pattern);
        
        const res = await api.get(`/questions?${queryParams.toString()}`);
        setQuestions(res.data);
      } catch (err) {
        console.error('Failed to fetch questions:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [filters]);

  return (
    <div className="space-y-6 fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Question Bank</h1>
          <p className="text-dark-400">Practice coding problems across different patterns.</p>
        </div>
        <div className="flex gap-4">
          <select 
            className="bg-dark-800 border border-dark-700 rounded-lg px-4 py-2 text-sm text-white focus:border-primary-500 outline-none"
            value={filters.difficulty}
            onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
          >
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select 
            className="bg-dark-800 border border-dark-700 rounded-lg px-4 py-2 text-sm text-white focus:border-primary-500 outline-none"
            value={filters.pattern}
            onChange={(e) => setFilters({...filters, pattern: e.target.value})}
          >
            <option value="">All Patterns</option>
            <option value="Arrays & Hashing">Arrays & Hashing</option>
            <option value="Two Pointers">Two Pointers</option>
            <option value="Sliding Window">Sliding Window</option>
            <option value="Linked List">Linked List</option>
            <option value="Binary Search">Binary Search</option>
            <option value="1D DP">1D DP</option>
            <option value="String">String</option>
            <option value="Math">Math</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="skeleton h-96 w-full rounded-2xl" />
      ) : (
        <div className="glass-card overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-dark-800/80 border-b border-dark-700 text-dark-300 text-sm">
              <tr>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Acceptance</th>
                <th className="px-6 py-4 font-medium">Difficulty</th>
                <th className="px-6 py-4 font-medium">Pattern</th>
                <th className="px-6 py-4 font-medium">Companies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-700/50">
              {questions.map((q) => (
                <tr key={q._id} className="hover:bg-dark-800/50 transition-colors group">
                  <td className="px-6 py-4">
                     <div className="w-5 h-5 rounded-full border-2 border-dark-600 group-hover:border-primary-500 transition-colors" />
                  </td>
                  <td className="px-6 py-4 font-medium text-white hover:text-primary-400">
                    <a href={q.link} target="_blank" rel="noopener noreferrer">{q.title}</a>
                  </td>
                  <td className="px-6 py-4 text-sm text-dark-300">{q.acceptance.toFixed(1)}%</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm ${
                      q.difficulty === 'Easy' ? 'text-emerald-400' :
                      q.difficulty === 'Medium' ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {q.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-dark-300">{q.pattern}</td>
                  <td className="px-6 py-4 flex flex-wrap gap-1">
                    {q.companies.slice(0, 3).map(c => (
                      <span key={c} className="text-xs bg-dark-700 px-2 py-1 rounded text-dark-300">{c}</span>
                    ))}
                    {q.companies.length > 3 && <span className="text-xs text-dark-500 py-1">+{q.companies.length - 3}</span>}
                  </td>
                </tr>
              ))}
              {questions.length === 0 && (
                <tr><td colSpan="6" className="px-6 py-8 text-center text-dark-400">No questions found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
