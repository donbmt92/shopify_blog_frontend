// API Configuration
export const API_BASE = process.env.REACT_APP_API_URL || 'https://shopify-blog-backend.vercel.app';

// Axios instance với CORS headers nếu cần
import axios from 'axios';

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor để thêm headers nếu cần
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor để xử lý lỗi CORS
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === 'ERR_NETWORK' || error.message?.includes('CORS')) {
      console.error('CORS Error: Backend cần được cấu hình CORS headers.');
      console.error('Vui lòng thêm vào backend:');
      console.error('Access-Control-Allow-Origin: https://shopify-blog-frontend.vercel.app');
    }
    return Promise.reject(error);
  }
);

export default apiClient;

