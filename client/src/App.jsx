import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
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

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-dark-400 text-sm">Loading PathForge...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
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
  );
}

export default App;
