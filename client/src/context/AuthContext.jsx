import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';

const AuthContext = createContext(null);

/**
 * AuthProvider wraps the app and provides authentication state.
 * Checks localStorage for an existing token on mount and fetches user data.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount, check for an existing token and fetch user
  useEffect(() => {
    const token = localStorage.getItem('pathforge_token');
    if (!token) {
      setLoading(false);
      return;
    }

    // Use AbortController to enforce a timeout — prevents infinite loading
    // if the backend is cold-starting or unreachable
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    api.get('/auth/me', { signal: controller.signal })
      .then((res) => setUser(res.data))
      .catch((err) => {
        // On timeout or any error, clear bad token and let user log in fresh
        if (err.name !== 'CanceledError') {
          localStorage.removeItem('pathforge_token');
        }
        setUser(null);
      })
      .finally(() => {
        clearTimeout(timeoutId);
        setLoading(false);
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    localStorage.setItem('pathforge_token', res.data.token);
    setUser(res.data.user);
    return res.data;
  };

  const signup = async (name, email, password, selectedDomain, goals) => {
    const res = await api.post('/auth/signup', { name, email, password, selectedDomain, goals });
    localStorage.setItem('pathforge_token', res.data.token);
    setUser(res.data.user);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem('pathforge_token');
    setUser(null);
  };

  const updateProfile = async (data) => {
    const res = await api.put('/auth/me', data);
    setUser(res.data);
    return res.data;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
