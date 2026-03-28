import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Navbar – Top navigation bar with logo, nav links, and auth actions.
 * Shows different links based on authentication state.
 */
export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive(path)
        ? 'bg-primary-600/20 text-primary-400'
        : 'text-dark-400 hover:text-dark-200 hover:bg-dark-800'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <span className="text-2xl">🛤️</span>
            <span className="text-xl font-bold gradient-text group-hover:opacity-80 transition-opacity">
              PathForge
            </span>
          </Link>

          {/* Navigation links */}
          {user ? (
            <>
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar flex-1 justify-center px-4">
                <Link to="/" className={navLinkClass('/')}>Dashboard</Link>
                <Link to="/roadmaps" className={navLinkClass('/roadmaps')}>Roadmaps</Link>
                <Link to="/sheets" className={navLinkClass('/sheets')}>DSA Sheets</Link>
                <Link to="/companies" className={navLinkClass('/companies')}>Companies</Link>
                <Link to="/fundamentals" className={navLinkClass('/fundamentals')}>Notes</Link>
              </div>
              <div className="flex items-center shrink-0 border-l border-dark-700 pl-4 ml-2">
                <Link to="/profile" className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-dark-800 border border-dark-600 flex items-center justify-center text-primary-400 text-sm font-bold group-hover:border-primary-500 transition-colors">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-xs font-bold text-dark-200 group-hover:text-white transition-colors leading-tight">{user.name}</p>
                    <p className="text-[10px] text-dark-400 leading-tight">{user.email}</p>
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  className="ml-4 text-dark-500 hover:text-red-400 text-sm font-medium px-2 py-1.5 rounded hover:bg-red-500/10 transition-all"
                  title="Logout"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login" className="btn-secondary text-sm !py-2 !px-4">
                Login
              </Link>
              <Link to="/signup" className="btn-primary text-sm !py-2 !px-4">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
