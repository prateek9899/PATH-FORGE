import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

export default function Companies() {
  const [data, setData] = useState({ companies: [], stats: { totalCompanies: 0, totalProblems: 0, faangCount: 0 } });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const queryParams = search ? `?search=${encodeURIComponent(search)}` : '';
        const res = await api.get(`/companies${queryParams}`);
        setData(res.data);
      } catch (err) {
        console.error('Failed to fetch companies:', err);
      } finally {
        setLoading(false);
      }
    };
    
    const timeoutId = setTimeout(fetchCompanies, 300); // debounce search
    return () => clearTimeout(timeoutId);
  }, [search]);

  if (loading && data.companies.length === 0) {
    return <div className="skeleton h-[800px] w-full rounded-2xl" />;
  }

  return (
    <div className="space-y-8 fade-in">
      <div className="py-2">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <span className="bg-primary-600/20 text-primary-400 p-2 rounded-xl text-3xl">🧳</span>
          Top Companies
        </h1>
        <p className="text-dark-400">Practice problems from leading tech companies</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex items-center gap-4 border-l-4 border-l-primary-500">
          <div className="w-12 h-12 rounded-xl bg-primary-900/40 flex items-center justify-center text-2xl text-primary-400">🏢</div>
          <div>
            <p className="text-xs text-dark-400 uppercase tracking-wider font-semibold">Total Companies</p>
            <p className="text-2xl font-bold text-white">{data.stats.totalCompanies}</p>
          </div>
        </div>
        <div className="glass-card p-6 flex items-center gap-4 border-l-4 border-l-purple-500">
          <div className="w-12 h-12 rounded-xl bg-purple-900/40 flex items-center justify-center text-2xl text-purple-400">{'</>'}</div>
          <div>
            <p className="text-xs text-dark-400 uppercase tracking-wider font-semibold">Total Problems</p>
            <p className="text-2xl font-bold text-white">{data.stats.totalProblems}</p>
          </div>
        </div>
        <div className="glass-card p-6 flex items-center gap-4 border-l-4 border-l-amber-500">
          <div className="w-12 h-12 rounded-xl bg-amber-900/40 flex items-center justify-center text-2xl text-amber-500">⭐</div>
          <div>
            <p className="text-xs text-dark-400 uppercase tracking-wider font-semibold">FAANG Companies</p>
            <p className="text-2xl font-bold text-white">{data.stats.faangCount}</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xl">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="text-dark-400">🔍</span>
        </div>
        <input
          type="text"
          className="bg-dark-900 border border-dark-700 text-white rounded-xl py-3 pl-12 pr-4 w-full focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.companies.map((company) => (
          <Link
            key={company._id}
            to={`/companies/${company.slug}`}
            className="glass-card p-6 flex flex-col items-start hover:border-primary-500/50 hover:bg-dark-800/80 transition-all group h-full"
          >
            <div className="w-full flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 text-3xl flex items-center justify-center pt-1 overflow-hidden">
                {company.logo}
              </div>
              {company.tier === 'FAANG' && (
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-amber-500/20 text-amber-500 border border-amber-500/30 flex items-center gap-1">
                  ⭐ FAANG
                </span>
              )}
              {company.tier === 'Top Tier' && (
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  ☆ Top Tier
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">{company.name}</h3>
            <p className="text-sm text-dark-400 mt-1">{company.problemCount} Problems</p>
            
            <div className="mt-6 pt-4 border-t border-dark-700/50 w-full flex items-center justify-between text-xs text-dark-300 group-hover:text-primary-400 transition-colors font-medium">
              View Questions
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
      
      {data.companies.length === 0 && !loading && (
        <div className="text-center py-20 text-dark-400">No companies found matching "{search}"</div>
      )}
    </div>
  );
}
