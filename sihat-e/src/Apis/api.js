import axios from 'axios';
import {
  TOKEN_KEY 
} from '../actions/types'

// new axios instance to work with inside the action creators in order to handle newletter api:
// this is goign to be called with a list of all those different values that we entered into our form as an argument to our action creator (an asynch action creator necessite a reduxThunk)

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  validateStatus: false
});



axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        // config.headers.Content-Type = 'application/json';
    } 
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;