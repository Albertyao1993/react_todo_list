import axios from 'axios';

// Create axios instance
const api = axios.create({
  baseURL: 'http://localhost:5001/api/v1', // Updated to correct backend API path
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add authentication token here
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle error responses
    if (error.response) {
      // Server returned an error status code
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error:', error.request);
    } else {
      // Error occurred during request setup
      console.error('Request Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api; 