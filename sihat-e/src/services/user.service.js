//  encapsulates all backend api calls, I created this folder so that I can handles all http communication with backend apis 

// I created the User.service.js file so that I can handle Api in relation with user data, 

// Im gonna use userService object so that I can export all the service methods that contains backend api calls :  
import {config} from '../webpack.config';
// Ill import the authHeader that will give me possibility to work with the Api using unique token (user)
import { authHeader } from '../helpers/auth-header';
 
    // In the login method the service accepts two arguments username and password it sends request using post and uses headers so it can store iformation about the type of returned data
export const userService = () => {
    function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
    }

    
    function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                return;
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
    }
}