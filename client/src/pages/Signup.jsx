import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DOMAINS = ['DSA', 'MERN', 'Java Backend', 'Data Science'];

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', selectedDomain: '', goals: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate('/', { replace: true });
    return null;
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signup(form.name, form.email, form.password, form.selectedDomain, form.goals);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-4xl">🚀</span>
          <h1 className="text-3xl font-bold gradient-text mt-3">Create Account</h1>
          <p className="text-dark-400 mt-2">Start your personalized learning journey</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="signup-name" className="block text-sm font-medium text-dark-300 mb-1.5">Full Name</label>
            <input
              id="signup-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="signup-email" className="block text-sm font-medium text-dark-300 mb-1.5">Email</label>
            <input
              id="signup-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="signup-password" className="block text-sm font-medium text-dark-300 mb-1.5">Password</label>
            <input
              id="signup-password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
              placeholder="Min 6 characters"
            />
          </div>

          <div>
            <label htmlFor="signup-domain" className="block text-sm font-medium text-dark-300 mb-1.5">Learning Domain</label>
            <select
              id="signup-domain"
              name="selectedDomain"
              value={form.selectedDomain}
              onChange={handleChange}
              className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
            >
              <option value="">Select a domain</option>
              {DOMAINS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="signup-goals" className="block text-sm font-medium text-dark-300 mb-1.5">Your Goals (optional)</label>
            <textarea
              id="signup-goals"
              name="goals"
              value={form.goals}
              onChange={handleChange}
              rows={2}
              className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
              placeholder="e.g., Prepare for FAANG interviews"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>

          <p className="text-center text-dark-400 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-400 hover:text-primary-300 font-medium">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
