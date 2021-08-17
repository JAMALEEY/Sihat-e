import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {  logout, createAbout, fetchAboutInfos  } from '../sihat-e/src/actions'
import {Field, Form, formValueSelector, reduxForm, touch} from 'redux-form';
import DashboardPatient from '../sihat-e/src/components/pages/Apropos/DashboardPatient';



    class BtnCreate extends Component {




            render() {
                return(
                <>
                <button id="btnFormDashboard" className="btn btn-light d-xl-flex align-items-xl-start submit-button" type="submit">Enregistrer
                </button>
                </>
                );
            }

    }





export default BtnCreate;

