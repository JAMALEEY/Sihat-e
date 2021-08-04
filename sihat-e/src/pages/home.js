import React from 'react';
import {Field, reduxForm} from 'redux-form';
// the Field argument is a component that we gonna work with while the reduxForm is a function that works similarly as connect funnction mmake sure we call action creator and get a form data ...





            const newsLetterForm = ({}) => {
              return (
                <>
                
                        <div className="form-group">
                          <input className="form-control" type="email" name="email" placeholder="Votre E-mail" />
                        </div>
                        <div className="form-group">
                          <button className="btn btn-primary" type="submit"><strong>Je m'abonne</strong></button></div>

                </>
              )
              
            }



            const Home = (props) => { 

                
            const onSubmit = (formValues) => {
              props.newsLetterForm(formValues)
            }

                return(
                    <>
            <div>
              <header className="header-blue">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-xl-5" id="iconContainer">
                      <div className="d-xl-flex my-auto justify-content-xl-center align-items-xl-center">
                        <img className="img-fluid d-xl-flex mx-auto justify-content-xl-center align-items-xl-center pulse animated infinite" src="/assets/img/Sicon.png" />
                      </div>
                    </div>
                    <div id="heroHeader" className="col-md-6 col-xl-6 offset-xl-0 d-xl-flex justify-content-xl-center align-items-xl-center">
                      <div>
                        <h1 className="text-uppercase">La révolution au bout des<br /><span>DOIGTS !</span></h1>
                      </div>
                    </div>
                    <a className="col-xl-12" id="arrowDownAnimation" role="button" href="#choixSection">  
                      <h1 className="text-center bounce animated infinite"> Go !</h1>
                    </a><div className="col"><a className="col-xl-12" id="arrowDownAnimation" role="button" href="#choixSection">
                        <div id="arrowDownBtnIndex" className="d-xl-flex justify-content-xl-center align-items-xl-center">
                          <i className="fa fa-angle-double-down bounce animated infinite animated">
                          </i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </header>
              <main>
                <div className="containerIndex">
                  <div className="row">
                    <div id="intro" className="col-md-6 col-xl-5 offset-xl-5">
                      <div id="introContainer"><img src="/assets/img/sihatetelemedecine.png" /></div>
                    </div>
                    <div id="introHeadingContainer" className="col-md-6 col-xl-6 offset-xl-2 d-xl-flex">
                      <article>
                        <h1 className="text-uppercase text-center">
                          <br />
                          <strong>VOTRE SANTé</strong>
                          <br />
                          <span>Notre mission</span>
                        </h1>
                        <p>
                          <strong>Améliorer la vie des marocains</strong>
                          <br />
                          <strong>en plaçant la santé&nbsp;au centre&nbsp;</strong>
                          <br />
                          <strong>de la transformation digitale.</strong>
                          <br />
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
                {/* first section end */}
                <section id="choixSection" className="card-section-image">
                  <h1>LOREM IPSUM</h1>
                  <h2>LOREM IPSUMA&nbsp;LOREM IPSUMALOREM IPSUMA<br /><br /></h2>
                  <div className="row d-xl-flex">
                    {/* patient card choice */}
                    <div className="col-sm-6 col-md-4 offset-xl-2">
                      <div className="card-container-image">
                        <div className="card-image">
                          <div className="front-image-left">
                            <div className="d-xl-flex justify-content-xl-center align-items-xl-center cover-image" id="patientImgLeft">
                              <img className="img-fluid d-xl-flex" src="/assets/img/patientsheroheader.png" />
                            </div>
                            <div className="content-image">
                              <h1 className="text-center">JE SUIS UN PATIENT</h1>
                              <p className="text-center">
                                <strong>En utilisant notre plateforme, vous réduisez considérablement&nbsp;&nbsp;
                                </strong><br />
                                <strong>les temps d'attente&nbsp;et les coûts associés aux déplacements.
                                </strong><br />
                              </p>
                            </div>
                            <div className="footer-image">
                              <span>
                                <i className="fa fa-plus">
                                </i>&nbsp; Continuer en tant que patient
                              </span>
                            </div>
                          </div>
                          <div className="back-image">
                            <img id="flipimg" className="img-fluid d-xl-flex" src="/assets/img/patientsheroheader.png" />
                            <div id="rowImgBack" className="row d-flex d-xl-flex flex-row justify-content-center justify-content-xl-center align-items-xl-center">
                              <div id="backImgContainer" className="col-xl-5 offset-xl-0">
                                <a href="./pages/signUpPatient.html"><img id="creercptsihate" data-bss-hover-animate="pulse" src="/assets/img/creercptsihate.png" type="button" />
                                  <img id="shakeimg" className="shake animated infinite" src="/assets/img/handsihate.png" />
                                </a>
                              </div>
                              <div id="loginsihatecontainer" className="col-xl-5 offset-xl-1">
                                <a href="./pages/signIn.html">
                                  <img id="loginsihate" data-bss-hover-animate="pulse" src="/assets/img/loginsihate.png" type="button" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* medecin card choice */}
                    <div className="col-sm-6 col-md-4 offset-xl-0">
                      <div className="card-container-image">
                        <div className="card-image">
                          <div className="front-image-left">
                            <div className="d-xl-flex justify-content-xl-center align-items-xl-center cover-image" id="patientImgLeft">
                              <img className="img-fluid d-xl-flex" src="/assets/img/medecinesihate.png" />
                            </div>
                            <div className="content-image">
                              <h1 className="text-center">JE SUIS UN MEDECIN</h1>
                              <p className="text-center">
                                <strong>En utilisant notre plateforme&nbsp;vous économisez sur les frais d'installation,&nbsp;</strong><br /><strong>les frais administratifs et le besoin de personnel supplémentaire.
                                </strong><br />
                              </p>
                            </div>
                            <div className="footer-image">
                              <span>
                                <i className="fa fa-plus">
                                </i>&nbsp; Continuer en tant que medecin
                              </span>
                            </div>
                          </div>
                          <div className="back-image2">
                            <img id="flipimg2" className="img-fluid d-xl-flex" src="/assets/img/medecinesihate.png" />
                            <div id="rowImgBack2" className="row d-flex d-xl-flex flex-row justify-content-center justify-content-xl-center align-items-xl-center">
                              <div id="backImgContainer2" className="col-xl-5 offset-xl-0">
                                <a href="./pages/signUpMedecin.html">
                                  <img id="creercptsihate2" data-bss-hover-animate="pulse" src="/assets/img/creercptsihate.png" type="button" />
                                  <img id="shakeimg2" className="shake animated infinite" src="/assets/img/handsihate.png" />
                                </a>
                              </div>
                              <div id="loginsihatecontainer2" className="col-xl-5 offset-xl-1">
                                <a href="./pages/signInMedecin">
                                  <img id="loginsihate2" data-bss-hover-animate="pulse" src="/assets/img/loginsihate.png" type="button" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Section two end  */}
                {/* newsLetter */}
                <section id="section2" className="newsletter-subscribe">
                  <div className="container">
                    <div className="intro">
                      <h2 className="text-monospace text-center"><strong>Pas d'intérêt pour le moment ?</strong></h2>
                      <p className="text-center">Restons en contact pour recevoir les nouveautés, <br />mises à jour et offres spéciales dans votre boîte E-mail. </p>
                    </div>
                    <div id="papperPlaneContainer" className="d-xl-flex justify-content-xl-end align-items-xl-center">
                      <img className="d-xl-flex swing animated infinite" src="/assets/img/papperPlane.png" />
                    </div>
                    <div id="envlpContainer" className="d-xl-flex justify-content-xl-center align-items-xl-center">
                      <form className="form-inline d-xl-flex justify-content-xl-center align-items-xl-center" method="post" onSubmit={props.handleSubmit(onSubmit)}>
                        <Field component={newsLetterForm} /> 
                      </form>
                      <img id="nwsltrimg" src="/assets/img/letternewsletter.png" />
                    </div>
                  </div>
                  {/* footer start */}
                  <footer id="footer" className="footer-basic">
                    <ul className="list-inline">
                      <li className="list-inline-item"><a href="#">Home</a></li>
                      <li className="list-inline-item"><a href="#">Services</a></li>
                      <li className="list-inline-item"><a href="#">About</a></li>
                      <li className="list-inline-item"><a href="#">Terms</a></li>
                      <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <div id="smContainer" className="d-flex d-xl-flex flex-row justify-content-center align-items-center justify-content-xl-center social"><a href="#"><i className="icon ion-social-instagram" /></a><a href="#"><i className="icon ion-social-snapchat" /></a><a href="#"><i className="icon ion-social-twitter" /></a><a href="#"><i className="icon ion-social-facebook" /></a></div>
                    <p className="copyright">Sihat-e © 2021</p>
                  </footer>
                  {/* footer end */}
                </section>
                {/* third section end */}
              </main>
            </div>


                    </>
                )
            }

            // the reduxFrom will return a function in which the Home component will be called reason why we passed it in as a parameter 
            // the reduxForm accept a signe parameter (form) and the value of it shoud be the reason why we created the form ...
export default reduxForm({
  form: 'newsletter'
})(Home);