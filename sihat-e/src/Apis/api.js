import axios from 'axios';


    const api = axios.create(
        {
            // the API that I created in the backEnd using laravel to use newsletter database
            baseURL: 'http://127.0.0.1:8000/api'
        }
    )

    export default api;

