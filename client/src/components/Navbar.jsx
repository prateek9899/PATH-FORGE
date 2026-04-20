import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * PathForge Logo SVG Component
 * A diamond-shaped forge icon with gradient coloring
 */
function PathForgeLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      {/* Outer diamond */}
      <path d="M16 2L28 16L16 30L4 16L16 2Z" fill="url(#logoGrad1)" opacity="0.9"/>
      {/* Inner path/road lines */}
      <path d="M16 6L24 16L16 26L8 16L16 6Z" fill="#0a0a1a" opacity="0.6"/>
      {/* Center forge spark */}
      <path d="M16 10L20 16L16 22L12 16L16 10Z" fill="url(#logoGrad2)" opacity="0.95"/>
      {/* Accent line top */}
      <line x1="16" y1="2" x2="16" y2="10" stroke="#c4b5fd" strokeWidth="1" opacity="0.6"/>
      {/* Accent line bottom */}
      <line x1="16" y1="22" x2="16" y2="30" stroke="#c4b5fd" strokeWidth="1" opacity="0.6"/>
    </svg>
  );
}

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
        : 'text-dark-400 hover:text-dark-200 hover:bg-dark-800/50'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a1a]/70 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <PathForgeLogo />
            <span className="text-xl font-bold logo-gradient group-hover:opacity-80 transition-opacity">
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
              <div className="flex items-center shrink-0 border-l border-white/[0.06] pl-4 ml-2">
                <Link to="/profile" className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-primary-900/40 border border-primary-500/30 flex items-center justify-center text-primary-400 text-sm font-bold group-hover:border-primary-500 transition-colors">
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
