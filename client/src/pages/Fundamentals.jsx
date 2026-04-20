import { useState, useEffect } from 'react';
import api from '../api/axios';

export default function Fundamentals() {
  const [modules, setModules] = useState([]);
  const [activeModule, setActiveModule] = useState(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [chapterContent, setChapterContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contentLoading, setContentLoading] = useState(false);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await api.get('/fundamentals');
        setModules(res.data);
        if (res.data.length > 0) {
          setActiveModule(res.data[0]);
        }
      } catch (err) {
        console.error('Failed to fetch modules:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchModules();
  }, []);

  useEffect(() => {
    if (activeModule) {
      const fetchChapterContent = async () => {
        setContentLoading(true);
        try {
          const res = await api.get(`/fundamentals/${activeModule.slug}/${activeChapterIndex}`);
          setChapterContent(res.data);
        } catch (err) {
          console.error('Failed to fetch chapter:', err);
        } finally {
          setContentLoading(false);
        }
      };
      fetchChapterContent();
    }
  }, [activeModule, activeChapterIndex]);

  if (loading) return <div className="skeleton h-screen w-full rounded-none" />;

  return (
    <div className="flex h-[calc(100vh-8rem)] -mt-4 border border-dark-700/50 rounded-2xl overflow-hidden bg-dark-900 fade-in">
      {/* Sidebar sidebar */}
      <div className="w-64 flex-shrink-0 border-r border-dark-700/50 bg-dark-950/50 flex flex-col">
        {/* Module Selector */}
        <div className="p-4 border-b border-dark-700/50">
          <p className="text-xs font-semibold text-dark-500 mb-2 uppercase tracking-wider">Module</p>
          <div className="relative">
            <select 
              className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-2.5 text-sm font-medium text-white appearance-none outline-none focus:border-primary-500"
              value={activeModule?._id || ''}
              onChange={(e) => {
                const mod = modules.find(m => m._id === e.target.value);
                setActiveModule(mod);
                setActiveChapterIndex(0);
              }}
            >
              {modules.map(m => (
                <option key={m._id} value={m._id}>{m.icon} {m.moduleName}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-dark-400">▼</div>
          </div>
        </div>
        
        {/* Chapters List */}
        <div className="flex-1 overflow-y-auto py-2">
          <p className="px-4 py-2 text-xs font-semibold text-dark-500 uppercase tracking-wider">Chapters</p>
          {activeModule?.chapters.map((ch, idx) => (
            <button
              key={idx}
              onClick={() => setActiveChapterIndex(idx)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors border-l-2 ${
                idx === activeChapterIndex 
                  ? 'bg-primary-900/10 border-primary-500 text-white' 
                  : 'border-transparent text-dark-400 hover:text-white hover:bg-dark-800'
              }`}
            >
              <div className="font-medium">{ch.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-dark-900 custom-scrollbar">
        {contentLoading ? (
          <div className="p-10 space-y-6">
            <div className="skeleton w-32 h-4" />
            <div className="skeleton w-3/4 h-12" />
            <div className="skeleton w-full h-64" />
          </div>
        ) : chapterContent ? (
          <div className="max-w-4xl mx-auto p-10">
            <div className="flex items-center gap-2 text-xs font-medium text-primary-400 mb-8 tracking-wider uppercase">
              <span># {activeModule.moduleName}</span>
              <span className="text-dark-600">/</span>
              <span>Chapter {activeChapterIndex + 1}</span>
            </div>
            
            <div className="flex justify-between items-end mb-10 border-b border-dark-800 pb-6">
              <h1 className="text-3xl font-bold text-white capitalize">{chapterContent.title.replace(/^\d+\s/, '')}</h1>
              <div className="flex items-center gap-4 text-xs text-dark-400">
                <span>READ TIME: ~{chapterContent.readTime} MIN</span>
                <span>•</span>
                <span>UPDATED: TODAY</span>
              </div>
            </div>

            <div className="prose prose-invert prose-primary max-w-none prose-h1:text-2xl prose-h2:text-xl prose-a:text-primary-400">
              {chapterContent.content.split('\n').map((line, i) => {
                // Image handling
                const imgMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
                if (imgMatch) {
                  const [_, alt, src] = imgMatch;
                  return (
                    <div key={i} className="my-10 group">
                      <img 
                        src={src} 
                        alt={alt} 
                        className="max-w-full h-auto rounded-2xl shadow-2xl border border-dark-700/50 hover:border-primary-500/50 transition-colors duration-500" 
                      />
                      {alt && <p className="text-center text-xs text-dark-500 mt-4 italic font-medium tracking-wide uppercase">{alt}</p>}
                    </div>
                  );
                }

                if (line.startsWith('# ')) return <h1 key={i} className="text-2xl font-bold mt-8 mb-4 text-white border-b border-dark-700 pb-2">{line.replace('# ', '')}</h1>;
                if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold mt-6 mb-3 text-white flex items-center gap-2"><span className="w-1.5 h-6 bg-primary-500 rounded-full inline-block"></span>{line.replace('## ', '')}</h2>;
                if (line.startsWith('### ')) return <h3 key={i} className="text-lg font-bold mt-4 mb-2 text-primary-400 uppercase tracking-wide">{line.replace('### ', '')}</h3>;
                if (line.startsWith('- ')) {
                   const formattedLine = line.replace('- ', '')
                     .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                     .replace(/`([^`]+)`/g, '<code class="bg-dark-800 px-1.5 py-0.5 rounded text-primary-400 font-mono text-xs">$1</code>');
                   return <li key={i} className="ml-6 mb-2 text-dark-200 list-disc marker:text-primary-500" dangerouslySetInnerHTML={{ __html: formattedLine }} />;
                }
                if (line.startsWith('```')) return null; // Simple skip for code block markers
                if (line.trim() === '') return <br key={i} />;
                
                // Check if line is part of an ASCII diagram (starts with | or contains multiple spaces/dashes)
                const isDiagram = /^[ \-|\\\_+*]+$/.test(line) || line.includes('---') || line.includes('|');
                
                const formattedLine = line
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/`([^`]+)`/g, '<code class="bg-dark-800 px-1.5 py-0.5 rounded text-primary-400 font-mono text-xs">$1</code>');

                return (
                  <p 
                    key={i} 
                    className={`text-dark-200 leading-relaxed mb-4 ${isDiagram ? 'font-mono text-xs bg-dark-950/50 p-2 rounded border border-dark-800 whitespace-pre' : ''}`}
                    dangerouslySetInnerHTML={{ __html: formattedLine }} 
                  />
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
