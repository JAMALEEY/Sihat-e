// I created this Auth header helper function so that I can handle the HTTP Authorization header which  contains the Json Web Token of the currently logged in user from local storage. (If no user return empty object)

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}