    import React, { useEffect, useState } from 'react';
import {    Link  } from 'react-router-dom';
import {    connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';


import {    login  } from '../../actions/user.actions'












    const SignInPatient = (props) => {

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [submited, setSubmited] = useState(false);
        const [name, setName] = useState();
        const [value, setValue] = useState();



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

 <Field component={renderInput} />
   

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
                      <i className="fab fa-facebook-f" />&nbsp;Se connecter
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

    const mapStateToProps = (state) => {
        return {
            logginIn : state.authentication
        };
    }

    const actionCreators = {
    login: login
};

const formWrapper = reduxForm({
              form: 'signIn',
            })(SignInPatient);

        export default connect(
            mapStateToProps,
            {actionCreators}
            )(formWrapper);