//  encapsulates all backend api calls, I created this folder so that I can handles all http communication with backend apis 

// I created the User.service.js file so that I can handle Api in relation with user data, 

// Im gonna use userService object so that I can export all the service methods that contains backend api calls :  
import config from 'config';
import { authHeader } from '../helpers';

    export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};