// this component is the root component for the react application, 
// I put hete the outer html, routes and global alert notification.

// If the url path doesn't match any route there is a default redirect defined below the routes that redirects the user to the home page.

// Lib Dependencies
import React from 'react';
// Components Dependencies
import Home from './pages/Home';
import SignInMedecin from './pages/SignInMedecin';
import SignInPatient from './pages/SignInPatient';
import SignUpMedecin from './pages/SingUpMedecin';
import SignUpPatient from './pages/SignUpPatient';
// Helpers Dependencies 
import history  from '../helpers/history';
// Routing Dependencies 
import { Router, Route, Switch, Redirect } from 'react-router-dom';
// Connection dependencie 
import { connect } from 'react-redux';
// Actions Dependencies 
// in order to work with cleaAlerts function that clear actions on location change

import DashboardPatient from './pages/DashboardPatient';



const  App = (props) => {

    // the history variable helper that we created from the built in function to enable redirecting users from outside React components ...
    // history.listen((location, action) => {
            // clear alert on location change
    //         props.clearAlerts();
    // });
  return (
    <>
    {/* to listen to history for changes to the URL ill be using BrowserRouter */}
    {/* the history keeps track of the adress bar in the browser */}
    <Router history={history}> 
    <Switch>
      {/* IF THE USER TYPED GIBRISH REDIRECT TO HOME PAGE */}
      {/* <Route path="/dashboardPatient" exact component={DashboardPatient}/> */}
                                <Route path="/" exact component={Home} />
                                <Route path="/loginMedecin" exact component={SignInMedecin} />
                                <Route path="/registerPatient" exact component={SignUpPatient} />
                                <Route path="/loginPatient" exact component={SignInPatient} render={DashboardPatient} />
                                <Route path="/registerMedecin" exact component={SignUpMedecin} />
                                <Redirect from="*" to="/" />
    </Switch>
    </Router>
    </>
    // we used the <Router /> and <Switch /> components from react-router-dom for leveraging client-side routing.
  );
}

// We wrap all the child components in the <Provider /> component from the react-redux library to make the global redux store available throughout the application.

export default App;
