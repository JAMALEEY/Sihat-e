import axios from 'axios';
import { TOKEN_KEY } from '../actions/types';


    // export default axios.create(
    //     {
    //         // the API that I created in the backEnd using laravel to use newsletter database
    //         baseURL: 'http://127.0.0.1:8000/api',
    //         headers: {
    //             'Authorization': 'Bearer ' + localStorage.getItem(TOKEN_KEY)
    //         }
    //     }
    // )


const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;