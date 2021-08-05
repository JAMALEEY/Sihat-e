// this component is the root component for the react application, 
// I put hete the outer html, routes and global alert notification.

// If the url path doesn't match any route there is a default redirect defined below the routes that redirects the user to the home page.

// Lib Dependencies
import React from 'react';
// Components Dependencies
import Home from './pages/Home';
import SignInMedecin from './pages/SignInMedecin';
import SignUpPatient from './pages/SignUpPatient';
import { PrivateRoute } from './PrivateRoute';
// Routing Dependencies 
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
// Connection dependencie 
import { connect } from 'react-redux';


const  App = (props) => {

    // the history variable helper that we created from the built in function to enable redirecting users from outside React components ...
    history.listen((location, action) => {
            // clear alert on location change
            props.clearAlerts();
        });
  return (
    <>
    <BrowserRouter>
    
    <Router history={history}> 
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
                                <Route path="/login" exact component={SignInMedecin} />
                                <Route path="/register" exact component={SignUpPatient} />
                                <Redirect from="*" to="/" />
    </Switch>
    </Router>
    </BrowserRouter>
    </>
  );
}

export default App;
