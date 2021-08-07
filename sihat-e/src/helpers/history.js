// react router dom allows us to work with history/
import createHistory from 'history/createBrowserHistory';

export default createHistory();

// to enable redirecting users from outside React components (from the user actions after successful login)
// I wrap up the built in function intro a const function helper