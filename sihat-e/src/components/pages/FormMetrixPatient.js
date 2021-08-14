import React, { Component } from "react";
import { connect } from "react-redux";
import { logout, createAbout, fetchAboutInfos, editAboutInfos } from "../../actions";
import {Link} from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { first } from "lodash";

class FormMetrixPatient extends Component {

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
        <h2>Loading</h2>
      ) : this.props.patientData.about_reducer.error ? (
        <h2>{this.props.patientData.about_reducer.error}</h2>
      ) : (
   
   
   
      <>
        <div className="d-xl-flex justify-content-xl-center align-items-xl-center">
          <div id="formCardContainer">
            <div>
              <div  className="row register-form">
                <div className="col-md-8 col-xl-10 offset-md-2 offset-xl-0">
                  <form id='metrixForm' className="custom-form" method='post' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <h1 className="d-xl-flex align-items-xl-start">Mes métriques de santé.</h1>

                   
                      {/* End Radios */}
                  </form>
                </div>

              </div>
              {/* End Form */}
              <div className='metrixWrapper'>
                    <Link to='/metrixTaille'>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div id='onemetric'>
                        <div>
                            <h5>
                                Taille
                            </h5>
                        </div>

                            <div>
                                <p>
                                    177cm
                                </p>
                                <p>
                                    date
                                </p>
                            </div>
                    </div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div id='onemetric'>
                        <div>
                            <h5>
                                Poids
                            </h5>
                        </div>

                            <div>
                                <p>
                                    177cm
                                </p>
                                <p>
                                    date
                                </p>
                            </div>
                    </div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div id='onemetric'>
                        <div>
                            <h5>
                                I.M.C
                            </h5>
                        </div>

                            <div>
                                <p>
                                    177cm
                                </p>
                                <p>
                                    date
                                </p>
                            </div>
                    </div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div id='onemetric'>
                        <div>
                            <h5>
                                Tension
                            </h5>
                        </div>

                            <div>
                                <p>
                                    177cm
                                </p>
                                <p>
                                    date
                                </p>
                            </div>
                    </div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div id='onemetric'>
                        <div>
                            <h5>
                                Température
                            </h5>
                        </div>

                            <div>
                                <p>
                                    177cm
                                </p>
                                <p>
                                    date
                                </p>
                            </div>
                    </div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div id='onemetric'>
                        <div>
                            <h5>
                                Cholesterol
                            </h5>
                        </div>

                            <div>
                                <p>
                                    177cm
                                </p>
                                <p>
                                    date
                                </p>
                            </div>
                    </div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    
                    
                    </Link>

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

FormMetrixPatient = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormMetrixPatient);

export default reduxForm({
    form: 'MetrixForm', // a unique name for this form
    enableReinitialize: true
})(FormMetrixPatient);


