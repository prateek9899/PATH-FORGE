import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

export default function DSASheets() {
  const [sheets, setSheets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSheets = async () => {
      try {
        const res = await api.get('/sheets');
        setSheets(res.data);
      } catch (err) {
        console.error('Failed to fetch sheets:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSheets();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="skeleton h-12 w-64" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => <div key={i} className="skeleton h-48 rounded-2xl" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 fade-in">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-4">Curated Sheets</h1>
        <p className="text-dark-400 text-lg max-w-2xl mx-auto">
          Select a roadmap to start your mastery journey. From community favorites to custom lists.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sheets.map((sheet, i) => (
          <div
            key={sheet._id}
            className="glass-card p-6 flex flex-col justify-between hover:border-primary-500/50 transition-all group"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {sheet.icon}
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{sheet.name}</h2>
              <p className="text-dark-400 text-sm leading-relaxed mb-8">
                {sheet.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <Link to={`/sheets/${sheet.slug}`} className="btn-secondary text-xs px-4 py-2 hover:text-white border-dark-600 bg-dark-800">
                OPEN SHEET
              </Link>
              <Link to={`/sheets/${sheet.slug}`} className="w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center text-dark-300 hover:text-white hover:bg-dark-700 transition-colors">
                →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
