 import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // backend API base URL

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;