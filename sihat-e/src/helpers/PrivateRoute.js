
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {  isLogin } from '../actions';

const PrivateRoute = ({App: App, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
             isLogin() ?
                <App {...props} />
            : <Redirect to="/loginPatient"/>
        )} />
    );
};

export default PrivateRoute;