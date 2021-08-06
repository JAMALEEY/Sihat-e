
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {  isLogin } from '../actions';

const PublicRoute = ({App: App, restricted, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
              isLogin() && restricted ?
                <Redirect to="/registerPatient"/>
            : <App {...props} />
        )} />
    );
};

export default PublicRoute;