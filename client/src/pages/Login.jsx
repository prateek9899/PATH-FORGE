import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (user) {
    navigate('/', { replace: true });
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-4xl">🛤️</span>
          <h1 className="text-3xl font-bold gradient-text mt-3">Welcome Back</h1>
          <p className="text-dark-400 mt-2">Sign in to continue your learning journey</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-dark-300 mb-1.5">Email</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="block text-sm font-medium text-dark-300 mb-1.5">Password</label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <p className="text-center text-dark-400 text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary-400 hover:text-primary-300 font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
