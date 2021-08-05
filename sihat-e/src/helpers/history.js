import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

// to enable redirecting users from outside React components (from the user actions after successful login)
// I wrap up the built in function intro a const function helper