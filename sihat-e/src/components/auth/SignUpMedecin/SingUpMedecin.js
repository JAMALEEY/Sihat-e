import React from 'react';
import { Link } from 'react-router-dom';
    const SignUpMedecin = () => {


            return(
        <>
        <main>
            <section id="medecinSingUpsSection">
                <div className="col">
                <div className="d-flex align-items-xl-center">
                    <div id="leftCardSinMedRow" className="row">
                    <div id="leftCardSinMed" className="col-xl-11 offset-xl-2">
                        <form id="sigMedForm" method="post">
                        <h2 id="signupMedTitle" className="text-center"><strong>Créer</strong>&nbsp;un compte.</h2>
                        <br />
                        <div className="form-group"><input className="form-control" type="email" id="emailInputMedecin" name="email" placeholder="Email" /></div>
                        <div className="form-group"><input className="form-control" type="password" id="passwordInputMedecin" name="password" placeholder="Mot de passe" />
                        </div>
                        <div className="form-group"><input className="form-control" type="password" id="repasswordInputMedecin" name="password-repeat" placeholder="Retapez le mot de passe" />
                        </div>
                        <div className="form-group">
                            <p id="sMagreed">En continuant,&nbsp;j'accepte les conditions et la politique de confidentialité.</p>
                        </div>
                        <button id="signupMedBtn" className="btn btn-primary btn-block" type="submit">Créér un compte
                        </button>
                        <Link className="already" to="/loginMedecin">Vous avez déjà un compte ? Connectez-vous ici. </Link>
                        <br /><br /><br /><br />
                        <div id="medecinSignUpSeperator" className="d-flex flex-row align-items-center login-box-seperator-container">
                            <div className="login-box-seperator" />
                            <div className="login-box-seperator-text">
                            <p id="orMS">ou</p>
                            </div>
                            <div className="login-box-seperator" />
                        </div>
                        <div className="d-xl-flex flex-column login-box-content">
                            <div className="fb-login box-shadow">
                            <Link className="d-flex flex-row align-items-center social-login-link" to="#">
                                <i className="fa fa-facebook" />&nbsp;Connectez-vous avec Facebook</Link>
                            </div>
                            <div className="gp-login box-shadow">
                            <Link className="d-flex flex-row align-items-center social-login-link" to="#">
                                <i className="fa fa-google" />&nbsp;Connectez-vous avec G-mail</Link>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div className="row" id="rowImgBoubouh">
                    <div className="col-xl-12 offset-xl-0"><img id="boubouhImg" src="../assets/img/boubouh.jpg?h=94afadff87f99b0362c66fa1d8138018" /></div>
                    </div>
                </div>
                </div>
            </section>
            <div className="d-xl-flex justify-content-xl-end"><img id="boubouhBlur" src="../assets/img/boubouhblur.jpg?h=16825968e33482a3d090386ce951499f" /></div>
            </main>
        </>
    )}   
    export default SignUpMedecin;