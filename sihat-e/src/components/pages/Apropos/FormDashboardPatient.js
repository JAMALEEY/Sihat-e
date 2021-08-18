import React, { Component } from "react";
import { connect } from "react-redux";
import { logout, createAbout, fetchAboutInfos, editAboutInfos } from "../../../actions";
import {Link} from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { first } from "lodash";
import Loader from "../../../helpers/Loader";

class FormDashboardPatient extends Component {

  componentDidMount() {
  //  this.props.fetchAboutInfos();
  console.log(this.props)
  //  console.log(this.props.patientData.about_reducer.patients.length)
  }

  renderInput({
    handleSubmit,
    input,
    value,
    meta,
    label,
    placeholder,
    name,
    id,
    type,
    className,
    initialValues,
    defaultValue,
    defaultChecked,
    checked,
  }) 
  
  {
    return (
      <>
        <div className="col-sm-6 col-xl-7 input-column">
          <div className="form-row form-group">
            <label className="active col-form-label d-xl-flex align-items-xl-start">
              {label}
            </label>
            <input
              {...input}
              className={className}
              autoComplete="none"
              placeholder={placeholder}
              onChange={input.onChange}
              value={input.value}
              name={name}
              type={type}
              id={id}
            />
          </div>
        </div>
      </>
    );
  }

  // handleChange(e) {
  //     const { target}  = this.event;
  //     const value = target.type === 'checkbox' ? target.checked : target.value;
  //     const { name }  = target;

  //     this.setState({
  //     [name]: value
  //     });
  // }
  // onSubmit = (formValues) => {
  //   this.props.onSubmit(formValues);
  // };


 

  onSubmit = (formValues) => {
    console.log(formValues)

    // console.log(this.props)

    // alert(this.props.patientData.about_reducer.patients)
    if (typeof this.props.patientData.about_reducer.patients === 'undefined' ) {

      this.props.createAbout(formValues);
    } else {
      this.props.editAboutInfos(formValues);
    }
  }; 




  render() {

    return this.props.patientData.about_reducer.loading ? (
      <div className=''>
              <Loader />
      </div>
      ) : this.props.patientData.about_reducer.error ? (
        <h2>{this.props.patientData.about_reducer.error}</h2>
      ) : (
   
   
   
      <>
        <div className="d-xl-flex justify-content-xl-center align-items-xl-center">
          <div id="formCardContainer">
            <div>
              {/* Start Form */}
              <div className="row register-form">
                <div className="col-md-8 col-xl-10 offset-md-2 offset-xl-0">
                  <form className="custom-form" method='post' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <h1 className="d-xl-flex align-items-xl-start">A propos</h1>

                    <div className="form-row form-group">
                      <div className="col-sm-6 col-xl-7 input-column">
                        <Field
                          className="form-control-plaintext"
                          name="first_name"
                          component={this.renderInput}
                          label="Prénom :"
                          placeholder="Votre prénom"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="form-row form-group">
                      <div className="col-sm-6 col-xl-7 input-column">
                        <Field
                          placeholder="Votre nom"
                          name="last_name"
                          label="Nom:"
                          component={this.renderInput}
                          className="form-control"
                          type="text"
                        ></Field>
                      </div>
                    </div>

                    {/* date naissance */}
                    <div className="form-row form-group">
                      <div className="col-sm-6 col-xl-7 input-column">
                        <Field
                          placeholder="Votre date"
                          name="birth_day"
                          label="date:"
                          component={this.renderInput}
                          className="form-control"
                          type="date"
                        ></Field>
                      </div>
                    </div>
                    {/* end date naissance */}


                    {/* Start Radios */}
                    <div className="form-row form-group">
                      <div className="col-sm-6 input-column">
                        <div className="custom-control custom-radio">
                          <div className="radioformboxPatienData">
                            <label>Genre :</label>

                            <div className="leschoixradio">
                              <label>
                                {" "}
                                Femme
                                <Field
                                  name="bio_sex"
                                  component={this.renderInput}
                                  type="radio"
                                  value="femme"
                                />
                              </label>

                              <label className="hommechoice">
                                {" "}
                                Homme
                                <Field
                                  id="radiocheckcheck"
                                  name="bio_sex"
                                  component={this.renderInput}
                                  type="radio"
                                  value="homme"
                                />
                              </label>
                            </div>
                            <div className="lesbuttons">
                                <br></br>
                              <button
                                id="btnFormDashboardPatient"
                                className="btn btn-light d-xl-flex align-items-xl-start submit-button"
                                type="submit"
                              >
                                Enregistrer
                              </button>
                              
                            </div>
                            
                          </div>
                        </div>
                      </div>
                      {/* End Radios */}
                    </div>
                  </form>
                </div>
              </div>
              {/* End Form */}
            </div>
          </div>
        </div>
      </>
    );
  }
}






const mapStateToProps = (state,props) => {
  return {
    patientData: state, 
  };
};

const mapDispatchToProps = (dispatch, formValues) => {
  return {
    fetchAboutInfos: () => dispatch(fetchAboutInfos()),
    createAbout : (formValues) => dispatch(createAbout(formValues)),
    editAboutInfos : (formValues) => dispatch(editAboutInfos(formValues)),
    logout: () => dispatch(logout()),


  };
};

FormDashboardPatient = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormDashboardPatient);

export default reduxForm({
    form: 'aboutInfosForm', // a unique name for this form
    enableReinitialize: true
})(FormDashboardPatient);



