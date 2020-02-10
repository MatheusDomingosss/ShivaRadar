import axios from 'axios';

const api = axios.create({
  baseURL: 'exp://150.162.12.38:8242',
});

export default api;

// exp://150.162.12.38:19000