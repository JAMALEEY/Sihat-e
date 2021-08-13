import _ from "lodash";
// a helper lib that allows us to pick aboutEDITS object values (first name etc) to initial values in reduxform
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  logout,
  fetchAboutInfos,
  createAbout,
} from "../../actions";
import { Field, Form, formValueSelector, reduxForm, touch } from "redux-form";
import FormDashboardPatient from "./FormDashboardPatient";

const DashboardPatient = (onSubmit, ) => {


  // state = {
  //   showFavorites: false,
  // };



  onSubmit = (formValues) => {
    createAbout(formValues);
  };

  // patientDashboarLogout = () => {
  //   logout();
  // };

  
              return (
                <>
                <div>
                
                  <FormDashboardPatient
                  onSubmit={onSubmit} />
                  </div>
                </>
        
              )
}


// const mapStateToProps = (state, props) => {
//   return {
//     patientData: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchAboutInfos: () => dispatch(fetchAboutInfos()),
//   };
// };

// DashboardPatient = connect(
  // mapStateToProps,
  // mapDispatchToProps
// )(DashboardPatient);

export default reduxForm({
  form: "aboutInfosForm", // a unique name for this form
})(DashboardPatient);
