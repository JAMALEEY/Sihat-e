import React, { Component } from "react";
import { connect } from "react-redux";
import { logout, createAbout, fetchAboutInfos, editAboutInfos } from "../../../actions";

import { Field, reduxForm , Link, formValueSelector } from "redux-form";
import { first } from "lodash";
import Loader  from "../../../helpers/Loader";
class FormContactInformation extends Component {

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

    // alert(this.props.patientData.about_reducer.patients)
    if (typeof this.props.patientData.about_reducer.patients === 'undefined' ) {
      this.props.createAbout(formValues);
    } else {
      this.props.editAboutInfos(formValues);
    }
  }; 




  render() {

    return this.props.patientData.about_reducer.loading ? (
      <Loader />
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
                    <h1 className="d-xl-flex align-items-xl-start">Mes informations</h1>




                    <div className="form-row form-group">
                      <div className="col-sm-6 col-xl-7 input-column">
                        <Field
                        
                          placeholder="Votre Ville"
                          name="city"
                          label="Ville :"
                          component={this.renderInput}
                          className="form-control"
                          type="text"
                        ></Field>
                      </div>
                    </div>

                    <div className="form-row form-group">
                      <div className="col-sm-6 col-xl-7 input-column">
                        <Field
                        
                          placeholder="Votre numéro de téléphone"
                          name="phone"
                          label="Mobile :"
                          component={this.renderInput}
                          className="form-control"
                          type="text"
                        ></Field>
                      </div>
                    </div>

                    {/* date naissance */}
                    <div className="form-row form-group">
                      <div  className="col-sm-6 col-xl-7 input-column">
                        {/* <Field id='emailDisabled'
                          name="email"
                          label="Votre E-mail est:"
                          component={this.renderInput}
                          className="form-control"
                          
                          disabled={this.pristine}
                        //   input={{ disabled: submitting, }}
                        ></Field> */}
                        <div id="fetchemailabout">
                        Votre E-mail est :
                    <div id='emailfetched'>
                    <p>
                                {this.props.patientData.about_reducer.patients.email}
                            </p>
                    </div>
                            
                        </div>
                      </div>
                    </div>
                    {/* end date naissance */}

                    {/* adresse */}

                    <div className="form-row form-group">
                      <div className="col-sm-6 col-xl-7 input-column">
                        <Field
                          placeholder="Votre adresse:"
                          name="adress"
                          label="Adresse :"
                          component={this.renderInput}
                          className="form-control"
                          type="text"
                        ></Field>
                      </div>
                    </div>

                    {/* End adresse */}

                    <div className="lesbuttons">
                              <button
                                id="btnFormDashboardContactForm"
                                className="btn btn-light d-xl-flex align-items-xl-start submit-button"
                                type="submit"
                              >
                                Enregistrer
                              </button>
                            </div>

                    </form>
                </div>
            </div>
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

  };
};

FormContactInformation = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContactInformation);

export default reduxForm({
    form: 'contactInfosForm', // a unique name for this form
    enableReinitialize: true
})(FormContactInformation);



