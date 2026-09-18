import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import RoadmapList from './pages/RoadmapList';
import RoadmapDetail from './pages/RoadmapDetail';
import Profile from './pages/Profile';
import DSASheets from './pages/DSASheets';
import SheetDetail from './pages/SheetDetail';
import Fundamentals from './pages/Fundamentals';
import Companies from './pages/Companies';
import CompanyDetail from './pages/CompanyDetail';
function App() {
  const { loading } = useAuth();
  const [slowLoad, setSlowLoad] = useState(false);

  // Pre-warm the backend as soon as the app mounts.
  // Free-tier servers sleep after inactivity — this ping wakes them up early.
  useEffect(() => {
    const BACKEND_URL = import.meta.env.VITE_API_URL
      ? import.meta.env.VITE_API_URL.replace(/\/api$/, '')
      : '';
    fetch(`${BACKEND_URL}/api/health`, { method: 'GET' }).catch(() => {});
  }, []);

  // Show a helpful message if loading takes more than 3 seconds
  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => setSlowLoad(true), 3000);
    return () => clearTimeout(t);
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-dark-400 text-sm">
            {slowLoad ? '⏳ Waking up server, please wait...' : 'Loading PathForge...'}
          </p>
          {slowLoad && (
            <p className="text-dark-500 text-xs max-w-xs text-center">
              The server was asleep. This only happens on first visit.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Animated Gradient Mesh Background */}
      <div className="app-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>
      <div className="grain-overlay" />

      {/* Main App Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/roadmaps" element={<ProtectedRoute><RoadmapList /></ProtectedRoute>} />
            <Route path="/roadmaps/:id" element={<ProtectedRoute><RoadmapDetail /></ProtectedRoute>} />
            <Route path="/sheets" element={<ProtectedRoute><DSASheets /></ProtectedRoute>} />
            <Route path="/sheets/:slug" element={<ProtectedRoute><SheetDetail /></ProtectedRoute>} />
            <Route path="/fundamentals" element={<ProtectedRoute><Fundamentals /></ProtectedRoute>} />
            <Route path="/companies" element={<ProtectedRoute><Companies /></ProtectedRoute>} />
            <Route path="/companies/:slug" element={<ProtectedRoute><CompanyDetail /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
