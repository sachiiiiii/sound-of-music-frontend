 import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // backend API base URL

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json', // Default 'Content-Type' for all requests
  },
});

// Request interceptor to add the JWT to the Authorization header before sending requests to protected API endpoints
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // retrieve authToken from localStorage
    // If token exists,
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // add the JWT to the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;