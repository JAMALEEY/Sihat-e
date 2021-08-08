import React from 'react';
import {connect} from 'react-redux'
import {Field, formValueSelector, reduxForm} from 'redux-form';

import { signUpPatient } from '../../actions';


              const errorsHelper = ({error, touched}) => {
                    // si l'utillisateur touche l'input field et qu'il ne propose pas un email valide un erreur se produirera
                    if (touched && error ) {
                      return(
                        <>
                        {/* <div className="bs-example"> 
                        <div className="alert alert-warning alert-dismissible fade show"> */}
                        <div className='taken'>
                          <div>
                            <strong> &#9888; Attention &#9888; </strong> 
                            {error} 
                        </div>
                          </div>
                        
                        
                        </>
                      )
                    }
                }

                const renderInput = ({input, meta}) => {
                    return (
                      <>
                        {errorsHelper(meta)}
                          <div className="form-group">
                              <input 
                                {...input} className="form-control form-control-user" 
                                type="email" 
                                id="exampleInputEmail" 
                                aria-describedby="emailHelp" 
                                placeholder="Votre Email Address..." 
                                name="email" 
                                onChange={input.onChange} 
                                value={input.value} 
                              />
                          </div>

                      </>
                    )
                }

                const renderInputPassword = ({input, meta}) => {
                    return (
                      <>
                    <div className="form-group">
                        <input 
                          {...input} className="form-control form-control-user" 
                          type="password" 
                          id="exampleInputPassword" 
                          placeholder="Votre Mot De Passe..."
                          name="password" 
                          onChange={input.onChange} 
                          value={input.value}
                      />
                    </div>
                      </>
                    );
                };
                const renderInputPasswordcheck = ({input, meta}) => {
                    return (
                      <>
                    <div className="form-group">
                        <input 
                          {...input} className="form-control form-control-user" 
                          type="password" 
                          id="exampleInputPassword2" 
                          placeholder="Votre Mot De Passe..."
                          name="password" 
                          onChange={input.onChange} 
                          value={input.value}
                      />
                    </div>
                      </>
                    );
                };
    const SignUpPatient = ({handleSubmit, signUpPatient}) => {

        
            const onSubmit = (formValues) => {
                signUpPatient(formValues)
            }


        return(
        <>
            <div>
                <section className="register-photo">
                <div id="divForm" className="d-flex d-xl-flex justify-content-xl-center align-items-xl-center">
                <form method="post" id="formSingUpPatient" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center"><strong>Créer</strong>&nbsp;un compte.</h2>
                    <Field name="email" component={renderInput}  />
                    <Field name="password" component={renderInputPassword} />
                    <Field name="passwordcheck" component={renderInputPasswordcheck} />
{/*                     
                    <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Mot de passe" /></div>
                    <div className="form-group"><input className="form-control" type="password" name="password-repeat" placeholder="Retapez le mot de passe" /></div> */}
                    <div className="form-group">
                    <p className="allowpatientform">En continuant,&nbsp;j'accepte les conditions et la politique de confidentialité.</p>
                    </div>
                    <div className="form-group"><button className="btn btn-primary btn-block" type="submit" id="btnpatientsignup">Créér un compte</button></div><a className="already" href="./signIn.html" id="alreadysignedpatient"><br />Vous avez déjà un compte ? Connectez-vous ici.<br /></a>
                    <div className="d-flex flex-row align-items-center login-box-seperator-container">
                    <div className="login-box-seperator" id="login-box-seperator-left" />
                    <div className="login-box-seperator-text">
                        <p>ou</p>
                    </div>
                    <div className="login-box-seperator" id="login-box-seperator-right" />
                    </div>
                    <div className="login-box-content">
                    <div className="fb-login box-shadow"><a className="d-flex flex-row align-items-center social-login-link" href="#"><i className="fa fa-facebook" id="fbcon" />Connectez-vous avec Facebook</a></div>
                    <div className="gp-login box-shadow"><a className="d-flex flex-row align-items-center social-login-link" href="#"><i className="fa fa-google" />&nbsp;Connectez-vous avec G-mail</a></div>
                    </div>
                </form>
                <div className="d-inline-flex flex-row justify-content-between form-container" id="cardPatientSignUp" />
                </div>
            </section>
                            {/* end first section */}

                            {/* caroussel start */}
            <div className="carousel slide carousel-fade" data-ride="carousel" id="carousel-1">
                <div id="carousContainer" className="carousel-inner">
                <div className="carousel-item active"><img className="w-100 d-block" src="/assets/img/haja.jpg" /></div>
                <div className="carousel-item"><img className="w-100 d-block" src="/assets/img/img5.jpg" /></div>
                <div className="carousel-item"><img className="w-100 d-block" src="/assets/img/kids.jpg" id="lastImgPatientSingup" /></div>
                </div>
                </div>
            </div>

        </>
    )

    }
                const validate = (formValues) => {
              const errors = {};
                if (!formValues.email) {
                  errors.email =  'Remplissez le champ d\'Email '
                }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)){
                  errors.email =  ' L\'adresse email est invalide !' 
                }
                return errors;
            };
    
    const mapStateToProps = (state) => {
        return {signUpPatient: state.signUpPatientState}
    };


    export default reduxForm({ form: 'signUpPatient', validate})(connect(mapStateToProps, {signUpPatient})(SignUpPatient))