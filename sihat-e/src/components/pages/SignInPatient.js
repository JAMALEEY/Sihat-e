import React, { useEffect, useState } from 'react';
import {  Link  } from 'react-router-dom';
import {  connect } from 'react-redux';
import {  createLogin  } from '../../actions';
import {Field, reduxForm} from 'redux-form';

                          // in order to centralize my errors in one place I use a helper function called errorsHelper
                const errorsHelper = ({error, touched}) => {
                    // si l'utillisateur touche l'input field et qu'il ne propose pas un email valide un erreur se produirera
                    if (touched && error) {
                      return(
                        <>
                        <div className="bs-example"> 
                        <div className="alert alert-warning alert-dismissible fade show">
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


                // My Functionnal Component :
                
                const SignInPatient = (props) => {
                    // const [email, setEmail] = useState("");
                    // const [password, setPassword] = useState("");
                    // const [error, setError] = useState("");

                    const onSubmit = (formValues) => {
                      props.createLogin(formValues)
                      
                    }

                    const [items, setItems] = useState([]);
                    const [errorMessage, setErrorMessage] = useState('');
                    useEffect(()=>{
                      axios.get('http://127.0.0.1:8000/api')
                      .then(response => {
                          setItems(response.data);
                      })
                      .catch(err => {
                          setErrorMessage(err.message)
                      });
                  }, [])


    return(
        <>
        <div>
            <main className="d-xl-flex align-items-xl-center" id="signInMain">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-9 col-lg-12 col-xl-10">
                    <div className="card shadow-lg o-hidden border-0 my-5">
                      <div className="card-body p-0">
                        <div id="cardSignIn" className="row">
                          <div className="col-lg-6 col-xl-4 offset-xl-0 d-none d-lg-flex">
                            <img id="signInImg" src="/assets/img/img2.png?h=9df21c311a88c7eec43e63a53cf742fe" />
                          </div>
                          <div className="
                            col-lg-6
                            offset-xl-2
                            d-xl-flex
                            justify-content-xl-end
                            align-items-xl-center
                          ">
                <div className="p-5">
                  <div className="text-center">
                    <h4 className="text-dark mb-4">Connectez-vous !</h4>
                  </div>
                  <form id="userFormSignIn" className="user" method="post" onSubmit={props.handleSubmit(onSubmit)} >

                    <Field name="email" component={renderInput} />
                    <Field name="password" component={renderInputPassword} />
                    
                    {/* <div className="form-group">
                      <input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Votre Email Address..." name="email" onChange={handleChange} value={username} />
                    </div>
                    <div className="form-group">
                      <input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Votre Mot De Passe..." name="password" onChange={handleChange} value={password}  />
                    </div> */}



                              <div className="form-group">
                                <div className="custom-control custom-checkbox small">
                                  <div className="form-check">
                                    <input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1" />
                                    <label className="form-check-label custom-control-label" htmlFor="formCheck-1">Se souvenir de moi</label>
                                  </div>
                                </div>
                              </div>
                              <button className="btn btn-primary btn-block text-white btn-user" id="loginBtn" type="submit">
                                Se connecter
                              </button>
                              <hr />
                              <a className="
                                btn btn-primary btn-block
                                text-white
                                btn-google btn-user
                              " role="button" id="btn-signInGmail">
                                <i className="fab fa-google" />&nbsp; Se connecter avec
                                Gmail
                              </a>
                              <a className="
                                btn btn-primary btn-block
                                text-white
                                btn-facebook btn-user
                              " role="button" id="btn-signInFb">
                                <i className="fab fa-facebook-f" />&nbsp; Se connecter
                                avec Facebook
                              </a>
                              <hr />
                            </form>
                            <div className="text-center" id="signInForgo">
                              <a className="small" href="forgot-password.html">J'ai oublié mon mot de passe !</a>
                            </div>
                            <div className="text-center" id="signInForgo">
                              <a className="small" href="./signUpPatient.html">Je crée mon compte !</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

        </div>
      </>
    )
    }
                
            // we Define also our Validation function called with a form values object, because this is what we are trying to look if its valide or not
            const validate = (formValues) => {
              const errors = {};
              // check if the user filled the form (if theres no form value)
              // if the user didnt put the Email
                if (!formValues.email) {
                  // we return an object with an error msg inside of it (in case of no errors we return empty object)
                  errors.email =  'SVP remplissez le champ d\'Email '
                }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)){
                  errors.email =  ' L\'adresse email est invalide !' 
                }
                  else if (formValues === 401){
                  errors.email =  ' Votre E-mail / mot de passe est incorrects. ' 
                }
                return errors;
            };

    // const mapStateToProps = (state) => {
    //     return {
    //         logginIn : state.authentication
    //     };
    // }

//     const actionCreators = {
//     createLogin: createLogin
// };

const formWrapper = reduxForm({
            form: 'signIn',
            validate
            })(SignInPatient);

        export default connect(
            null,
            {createLogin}
            )(formWrapper);