import React from 'react';

    const SignUpPatient = () => {

        
        return(
        <>
            <div>
                <section className="register-photo">
                <div id="divForm" className="d-flex d-xl-flex justify-content-xl-center align-items-xl-center">
                <form method="post" id="formSingUpPatient">
                    <h2 className="text-center"><strong>Créer</strong>&nbsp;un compte.</h2>
                    <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Mot de passe" /></div>
                    <div className="form-group"><input className="form-control" type="password" name="password-repeat" placeholder="Retapez le mot de passe" /></div>
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

    export default SignUpPatient;