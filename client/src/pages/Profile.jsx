import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const DOMAINS = ['DSA', 'MERN', 'Java Backend', 'Data Science'];

/**
 * Profile – User profile page to update name, domain, and goals.
 */
export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState({
    name: user?.name || '',
    selectedDomain: user?.selectedDomain || '',
    goals: user?.goals || '',
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      await updateProfile(form);
      setMessage('Profile updated successfully!');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-8 fade-in">
      <div>
        <h1 className="text-2xl font-bold text-dark-100">👤 Profile Settings</h1>
        <p className="text-dark-400 mt-1">Manage your account and learning preferences</p>
      </div>

      {/* User info card */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center text-2xl font-bold text-white">
            {user?.name?.charAt(0)?.toUpperCase() || '?'}
          </div>
          <div>
            <p className="text-lg font-semibold text-dark-100">{user?.name}</p>
            <p className="text-dark-400 text-sm">{user?.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {message && (
            <div className={`text-sm px-4 py-3 rounded-xl ${
              message.includes('success')
                ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}>
              {message}
            </div>
          )}

          <div>
            <label htmlFor="profile-name" className="block text-sm font-medium text-dark-300 mb-1.5">Full Name</label>
            <input
              id="profile-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="profile-domain" className="block text-sm font-medium text-dark-300 mb-1.5">Learning Domain</label>
            <select
              id="profile-domain"
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
            <label htmlFor="profile-goals" className="block text-sm font-medium text-dark-300 mb-1.5">Your Goals</label>
            <textarea
              id="profile-goals"
              name="goals"
              value={form.goals}
              onChange={handleChange}
              rows={3}
              className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-2.5 text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
              placeholder="What do you want to achieve?"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="btn-primary w-full disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>

      {/* Account info */}
      <div className="glass-card p-6">
        <h3 className="text-sm font-medium text-dark-300 mb-3">Account Information</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-dark-400">Email</span>
            <span className="text-dark-200">{user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-dark-400">Member since</span>
            <span className="text-dark-200">
              {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
