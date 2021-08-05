import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    //  Here I renders a route component if the user is logged in, else dans la cas échéant redirects the user to the /login page.
    <Route {...rest} render={props => (
        // checks if the user is logged in is by checking that there is a user object in local storage.
        localStorage.getItem('user')
        // if true renders route component
            ? <Component {...props} />
            // else redirect
            : <Redirect to={{ pathname: '/Home', state: { from: props.location } }} />
    )} />
    // (Bypassable raison pourlaquelle on opte pour JWT dans Sihat-e)
)