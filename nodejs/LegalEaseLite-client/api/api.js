import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.36.199.124:5000', // replace X.X with your PC's LAN IP
});

// Function to set token dynamically
export const setAuthToken = (token) => {
  if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete api.defaults.headers.common['Authorization'];
};

export default api;

