import React from 'react';
import { Link } from 'react-router-dom';

    const SignInMedecin = () => {




            return(
        <>
            <main className="d-xl-flex align-items-xl-center" id="signInMainDoc">
            <div id="containerDoc" className="container">
                <div id="cardDocSignIn" className="row justify-content-center">
                <div className="col-md-9 col-lg-12">
                    <div className="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div id="cardSignInDoc" className="row">
                        <div className="col-lg-6 col-xl-4 offset-xl-0 d-none d-lg-flex">
                            <img id="signInImgDr" src="/assets/img/drmalika.jpg" />
                        </div>
                        <div className="col-lg-5 offset-xl-2 d-xl-flex justify-content-xl-end align-items-xl-center">
                            <div id="p5" className="p-2">
                            <div className="text-center">
                                <h4 className="text-dark mb-4">Connectez-vous !</h4>
                            </div>
                            <form id="docFormSignIn" method='post' className="user">
                                <div className="form-group">
                                <input
                                    className="form-control form-control-user"
                                    type="email"
                                    id="exampleInputEmail"
                                    aria-describedby="emailHelp"
                                    placeholder="Votre Email Address..."
                                    name="email"
                                />
                                </div>
                                <div className="form-group">
                                <input
                                    className="form-control form-control-user"
                                    type="password"
                                    id="exampleInputPassword"
                                    placeholder="Votre Mot De Passe..."
                                    name="password"
                                />
                                </div>
                                <div id="formDoc" className="form-group">
                                <div className="custom-control custom-checkbox small">
                                    <div className="form-check">
                                    <input
                                        className="form-check-input custom-control-input"
                                        type="checkbox"
                                        id="formCheck-1"
                                    />
                                    <label
                                        className="form-check-label custom-control-label"
                                        htmlFor="formCheck-1"
                                    >
                                        Se souvenir de moi
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <button
                                    className="btn btn-primary btn-block text-white btn-user"
                                    id="loginBtnDoc"
                                    type="submit"
                                >
                                Se connecter
                                </button>
                                <hr />
                                <a
                                className="
                                        btn btn-primary btn-block
                                        text-white
                                        btn-google btn-user
                                        "
                                role="button"
                                id="btn-signInGmail"
                                >
                                <i className="fab fa-google" />
                                &nbsp; Se connecter avec Gmail
                                </a>
                                <a
                                className="
                                        btn btn-primary btn-block
                                        text-white
                                        btn-facebook btn-user
                                        "
                                role="button"
                                id="btn-signInFb"
                                >
                                <i className="fab fa-facebook-f" />
                                &nbsp;Se connecter avec Facebook
                                </a>
                                <hr />
                            </form>
                            <div className="text-center" id="signInForgo">
                                <Link className="small" to="./registerMedecin">
                                J'ai oublié mon mot de passe !
                                </Link>
                            </div>
                            <div className="text-center" id="signInForgo">
                                <Link className="small" to="./registerMedecin">
                                Je crée mon compte !
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </main>;

```
        </>
    )
    
    }

    export default SignInMedecin;