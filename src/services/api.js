import axios from 'axios';

const api = axios.create({
  baseURL: 'https://we3vision-demo-backend.onrender.com/api'
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Let the browser set the correct boundary for FormData
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    }
    
    console.log('API Request:', {
      method: config.method,
      url: config.url,
      baseURL: config.baseURL,
      headers: config.headers,
      data: config.data
    });
    
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', {
      status: response.status,
      statusText: response.statusText,
      data: response.data,
      headers: response.headers
    });
    return response;
  },
  (error) => {
    console.error('API Response Error:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message
    });
    
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api; 

export const getFileUrl = (path) => {
  if (!path) return '';
  // If an absolute URL is provided, normalize protocol to avoid mixed content
  if (path.startsWith('http')) {
    try {
      const url = new URL(path);
      if (typeof window !== 'undefined' && window.location?.protocol === 'https:' && url.protocol === 'http:') {
        url.protocol = 'https:';
        return url.toString();
      }
      return path;
    } catch (_) {
      return path;
    }
  }
  const apiBase = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  let fileBase = apiBase.replace(/\/api$/, '');

  // If the site is served over HTTPS, avoid mixed-content by upgrading scheme
  try {
    if (typeof window !== 'undefined' && window.location?.protocol === 'https:') {
      const parsed = new URL(fileBase);
      if (parsed.protocol === 'http:') {
        parsed.protocol = 'https:';
        fileBase = parsed.toString().replace(/\/$/, '');
      }
    }
  } catch (_) {
    // Fallback: naive replacement if URL parsing fails
    if (typeof window !== 'undefined' && window.location?.protocol === 'https:') {
      fileBase = fileBase.replace(/^http:\/\//i, 'https://');
    }
  }

  return `${fileBase}${path.startsWith('/') ? path : `/${path}`}`;
};