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
import PrivateRoute from './pages/PrivateRoute';
import PublicRoute from './pages/PublicRoute';
// import PatientDashboard from '../../../PatientDashboard';
import FormDashboardPatient from './pages/FormDashboardPatient';
import DashboardPatientEdit from './pages/DashboardPatientEdit';
import ContactInformation from './pages/ContactInformation';
import AboutList from './pages/AboutList';
import Metrix from './pages/Metrix';
import MetrixForm from './pages/MetrixForm';
import FormMetrixPatient from './pages/FormMetrixPatient';
import MetrixTaille from './pages/MetrixTaille';
import MetricTailleEdit from './pages/MetricTailleEdit';
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
                                <PublicRoute path="/edit" exact component={DashboardPatientEdit} />
                                <PublicRoute path="/registerMedecin" exact component={SignUpMedecin} />
                                <PublicRoute path="/contactinformation" exact component={ContactInformation} />
                                <PublicRoute path="/aboutlist" exact component={AboutList} />
                                <PublicRoute path="/metrix" exact component={Metrix} />
                                <PublicRoute path="/metrix/form" exact component={FormMetrixPatient} />
                                <PublicRoute path="/metrixTaille" exact component={MetrixTaille} />
                                <PublicRoute path="/MetricTailleEdit" exact component={MetricTailleEdit} />
                                
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
