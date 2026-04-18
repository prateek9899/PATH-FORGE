import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';

export default function SheetDetail() {
  const { slug } = useParams();
  const [sheet, setSheet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSheet = async () => {
      try {
        const res = await api.get(`/sheets/${slug}`);
        setSheet(res.data);
      } catch (err) {
        console.error('Failed to fetch sheet:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSheet();
  }, [slug]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="skeleton h-12 w-64" />
        <div className="skeleton h-96 rounded-2xl" />
      </div>
    );
  }

  if (!sheet) {
    return <div className="text-center py-20 text-dark-400">Sheet not found</div>;
  }

  return (
    <div className="space-y-8 fade-in">
      <Link to="/sheets" className="text-dark-400 hover:text-white inline-flex items-center gap-2">
        ← Back to Sheets
      </Link>
      
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <span className="text-4xl">{sheet.icon}</span> {sheet.name}
        </h1>
        <p className="text-dark-400 mt-2">{sheet.description}</p>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-dark-800/50 border-b border-dark-700">
            <tr>
              <th className="px-6 py-4 font-medium text-dark-300">Status</th>
              <th className="px-6 py-4 font-medium text-dark-300">Problem & Companies</th>
              <th className="px-6 py-4 font-medium text-dark-300">Difficulty</th>
              <th className="px-6 py-4 font-medium text-dark-300">Pattern</th>
              <th className="px-6 py-4 font-medium text-dark-300">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-700/50">
            {sheet.problems.map((problem, i) => (
              <tr key={problem._id || i} className="hover:bg-dark-800/30 transition-colors">
                <td className="px-6 py-4 align-top">
                  <input type="checkbox" className="w-4 h-4 mt-1 rounded border-dark-600 bg-dark-800 text-primary-500 focus:ring-primary-500 cursor-pointer" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1.5 align-top">
                    <a href={problem.link} target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:text-primary-400">
                      {problem.title}
                    </a>
                    {problem.companies && problem.companies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-0.5">
                        {problem.companies.map((company, idx) => (
                           <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-bold bg-dark-800 text-primary-300 border border-primary-900/50 shadow-sm">
                             {company}
                           </span>
                        ))}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 align-top">
                  <span className={`px-2.5 py-1 rounded text-xs font-medium ${
                    problem.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-400' :
                    problem.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-400' :
                    'bg-red-500/10 text-red-400'
                  }`}>
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-dark-400 align-top">{problem.pattern}</td>
                <td className="px-6 py-4 text-xs text-dark-400 align-top max-w-xs leading-relaxed">
                  {problem.notes || 'No notes available.'}
                </td>
              </tr>
            ))}
            {sheet.problems.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-dark-400">
                  Problems are being added to this sheet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
