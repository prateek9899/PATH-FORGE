import axios from 'axios';

// Create an Axios instance with default configuration.
// In development, Vite proxies /api requests to the backend.
// In production, set VITE_API_URL to the backend URL.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor – attach JWT token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('pathforge_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor – handle 401 (expired/invalid token)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('pathforge_token');
      // Only redirect if not already on auth pages
      if (!window.location.pathname.includes('/login') && !window.location.pathname.includes('/signup')) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
