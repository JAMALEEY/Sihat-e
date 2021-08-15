// this component is the root component for the react application, 
// I put hete the outer html, routes and global alert notification.

// If the url path doesn't match any route there is a default redirect defined below the routes that redirects the user to the home page.

// Lib Dependencies
import React from 'react';
// Components Dependencies
import Home from './pages/Home';
import SignInMedecin from './auth/SignInMedecin/SignInMedecin';
import SignInPatient from './auth/SignInPatient/SignInPatient';
import SignUpMedecin from './auth/SignUpMedecin/SingUpMedecin';
import SignUpPatient from './auth/SignUpPatient/SignUpPatient';
// Helpers Dependencies 
import history  from '../helpers/history';
// Routing Dependencies 
import { Router, Route, Switch, Redirect } from 'react-router-dom';
// Connection dependencie 
import { connect } from 'react-redux';
// Actions Dependencies 
// in order to work with cleaAlerts function that clear actions on location change

import DashboardPatient from './pages/Apropos/DashboardPatient';
import PrivateRoute from '../helpers/PrivateRoute';
import PublicRoute from '../helpers/PublicRoute';
// import PatientDashboard from '../../../PatientDashboard';
import FormDashboardPatient from './pages/Apropos/FormDashboardPatient';
import ContactInformation from './pages/InformationContact/ContactInformation';
import Metrix from './pages/PatientMetrix/Metrix';
import FormMetrixPatient from './pages/PatientMetrix/Tailles/FormMetrixPatient';
import MetrixTaille from './pages/PatientMetrix/Tailles/MetrixTaille';
// import Modal from './pages/Modal';

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
                <PrivateRoute component={DashboardPatient} path="/dashboardPatient" exact />
                                <PublicRoute  restricted={false}  path="/" exact component={Home} />
                                <PublicRoute path="/loginMedecin" exact component={SignInMedecin} />
                                <PublicRoute path="/registerPatient" exact component={SignUpPatient} />
                                <PublicRoute restricted={true}  path="/loginPatient" exact component={SignInPatient} />
                                <PublicRoute path="/registerMedecin" exact component={SignUpMedecin} />
                                <PublicRoute path="/contactinformation" exact component={ContactInformation} />
                                <PublicRoute path="/metrix" exact component={Metrix} />
                                <PublicRoute path="/metrix/form" exact component={FormMetrixPatient} />
                                <PublicRoute path="/metrixTaille" exact component={MetrixTaille} />
                                
                                {/* <PublicRoute path="/modal" exact component={Modal} /> */}
                                <Redirect from="*" to="/" />
    </Switch>
    </Router>
    </>
    // we used the <Router /> and <Switch /> components from react-router-dom for leveraging client-side routing.
  );
}

// We wrap all the child components in the <Provider /> component from the react-redux library to make the global redux store available throughout the application.

export default App;
