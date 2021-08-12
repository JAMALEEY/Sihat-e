import React, { Component } from "react";
import { connect } from "react-redux";
import { logout, createAbout, fetchAboutInfos } from "../../actions";

import { Field, reduxForm , Link } from "redux-form";
import { first } from "lodash";

class FormDashboardPatient extends Component {

  componentDidMount() {
   this.props.fetchAboutInfos();
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
  }) {
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
              // value={input.value}
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
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {

    return this.props.patientData.about_reducer.loading ? (
        <h2>Loading</h2>
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
                  <form className="custom-form" onSubmit={this.onSubmit}>
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

                    {/* adresse */}

                    <div className="form-row form-group">
                      <div className="col-sm-6 col-xl-7 input-column">
                        <Field
                          placeholder="Votre adresse"
                          name="adress"
                          label="Adresse"
                          component={this.renderInput}
                          className="form-control"
                          type="text"
                        ></Field>
                      </div>
                    </div>

                    {/* End adresse */}

                    {/* Start Radios */}
                    <div className="form-row form-group">
                      <div className="col-sm-6 input-column">
                        <div className="custom-control custom-radio">
                          <div className="radioformbox">
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
                              {/* <button id="btnFormDashboard" className="btn btn-light d-xl-flex align-items-xl-start submit-button" type="submit">Enregistrer
    </button> */}
                              <button
                                id="btnFormDashboard"
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAboutInfos: () => dispatch(fetchAboutInfos()),
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



