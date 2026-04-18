import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';

export default function CompanyDetail() {
  const { slug } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await api.get(`/companies/${slug}`);
        setCompany(res.data);
      } catch (err) {
        console.error('Failed to fetch company:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCompany();
  }, [slug]);

  if (loading) return <div className="skeleton h-[600px] w-full rounded-2xl" />;
  if (!company) return <div className="text-center py-20 text-dark-400">Company not found</div>;

  return (
    <div className="space-y-8 fade-in">
      <Link to="/companies" className="text-dark-400 hover:text-white inline-flex items-center gap-2">
        ← Back to Companies
      </Link>
      
      <div className="glass-card p-8 flex items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-dark-900 border border-dark-700 flex items-center justify-center text-5xl">
          {company.logo}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{company.name}</h1>
          <div className="flex gap-4 items-center">
            <span className="text-dark-400 font-medium">{company.problemCount} Total Problems</span>
            {company.tier && (
              <span className={`text-xs font-bold px-2 py-1 rounded ${
                company.tier === 'FAANG' ? 'bg-amber-500/20 text-amber-500 border border-amber-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              }`}>
                {company.tier}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-dark-800/80 border-b border-dark-700 text-dark-300 text-sm">
            <tr>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Title</th>
              <th className="px-6 py-4 font-medium">Practice Links</th>
              <th className="px-6 py-4 font-medium">Difficulty</th>
              <th className="px-6 py-4 font-medium text-right">Frequency</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-700/50">
            {company.problems.map((problem) => (
              <tr key={problem._id} className="hover:bg-dark-800/50 transition-colors group">
                <td className="px-6 py-4">
                  <input type="checkbox" className="w-4 h-4 rounded border-dark-600 bg-dark-800 text-primary-500 focus:ring-primary-500 cursor-pointer" />
                </td>
                <td className="px-6 py-4 font-medium text-white truncate max-w-xs">
                  {problem.title}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                     <a href={problem.leetcodeLink} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-bold rounded hover:bg-amber-500/20 transition-colors flex items-center gap-1">LeetCode</a>
                     <a href={problem.gfgLink} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-bold rounded hover:bg-emerald-500/20 transition-colors flex items-center gap-1">GeeksForGeeks</a>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm ${
                    problem.difficulty === 'Easy' ? 'text-emerald-400' :
                    problem.difficulty === 'Medium' ? 'text-amber-400' : 'text-red-400'
                  }`}>
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="inline-flex items-center gap-1.5 text-sm text-dark-300 bg-dark-800 px-2 py-0.5 rounded border border-dark-700 group-hover:border-dark-500 shadow-inner">
                    <div className="w-16 h-1.5 bg-dark-900 rounded-full overflow-hidden mr-2">
                       <div className="h-full bg-primary-500 rounded-full" style={{width: `${(problem.frequency / 25) * 100}%`}} />
                    </div>
                    {problem.frequency}x
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
