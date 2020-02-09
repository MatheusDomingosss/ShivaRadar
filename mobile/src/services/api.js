import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.2:8242',
});

export default api;