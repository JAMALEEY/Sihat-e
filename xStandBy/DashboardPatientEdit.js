import _ from "lodash";
// a helper lib that allows us to pick aboutEDITS object values (first name etc) to initial values in reduxform
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  logout,
  editAboutInfos,
  fetchAboutInfos,
} from "../sihat-e/src/actions";
import { Field, Form, formValueSelector, reduxForm, touch } from "redux-form";
import FormDashboardPatient from "../sihat-e/src/components/pages/Apropos/FormDashboardPatient";
import { bindActionCreators } from "redux";

class DashboardPatientEdit extends Component {
  // state = {
  //     showFavorites: false
  // }

  // componentWillMount() {
  //     //console.log(this.props.match.params.format)
  //     this.props.fetchAboutInfos(this.props.match.params.format, this.state.aboutInfos);
  //     // console.log(this.props.popular)
  //     // console.log(this.getList.bind(this));
  // }

  componentDidMount() {
    this.props.fetchAboutInfos();
  }
  // constructor(props) {
  //     super(props)
  //     this.props.fetchAboutInfos();

  // }
  // componentDidMount(){
  //     this.props.fetchAboutInfos();
  //     console.log(fetchAboutInfos())
  // }

  onSubmit = (formValues) => {
    this.props.editAboutInfos(formValues);
  };

  patientDashboarLogout = () => {
    this.props.logout();
  };

  render() {
    console.log(this.props);

    return (
      <>
        <div>
          {/* {this.props.aboutInfos 
                        ? 
                        this.props.aboutInfos.map((item)=>(
                            <div key={item.id}>
                                    {item.first_name}
                                </div> )) 
                        :null} */}

          <div className="row" id="navRow">
            <div
              className="col-md-6 col-xl-2 offset-xl-0"
              id="leftMenuContainer"
            >
              <div id="logoNavContainer">
                <div
                  className="d-flex d-xl-flex flex-row justify-content-between align-items-center justify-content-xl-center align-items-xl-center"
                  id="headingNavContainer"
                >
                  <div
                    className="d-flex d-xl-flex justify-content-xl-center align-items-xl-center"
                    id="logoDashboard"
                  >
                    <img src="../../../assets/img/Sicon.png" />
                  </div>
                  <h1>
                    MON COMPTE
                    <span>
                      <br />
                      <strong>ACCUEIL</strong>
                      <br />
                      <br />
                      <br />
                    </span>
                  </h1>
                </div>
              </div>
              <div>
                {/* Start: Sidebar */}
                <div id="sidebar-main" className="sidebar sidebar-default">
                  <div className="sidebar-category sidebar-default">
                    <div className="category-title"></div>
                    <div className="category-content">
                      <ul id="fruits-nav" className="nav flex-column">
                        <li className="nav-item1">
                          <a href="#" className="nav-link active">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="active fa fa-user-circle-o fa-2x d-xl-flex align-items-xl-center "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebar d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                A propos.
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item2">
                          <Link to="/contactinformation" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-vcard d-xl-flex align-items-xl-center d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Informations de contact.
                              </h5>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item3">
                          <a href="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-bar-chart-o d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Métriques de santé.
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item4">
                          <a href="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-heartbeat d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Conditions / Symptomes.
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item5">
                          <a href="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-file-powerpoint-o d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Ordonnances.
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item6">
                          <a href="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-leaf d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Médicaments.
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item7">
                          <a href="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-low-vision d-xl-flex align-items-xl-center  fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Allergies.
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item8">
                          <a href="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-stethoscope d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Traitement / procédures.
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item9">
                          <a href="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-user-md d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Vaccinations.
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item10">
                          <a href="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-flask d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Tests de laboratoire.
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item11">
                          <a href="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-grav d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Mode de vie.
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item12">
                          <a href="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-life-saver d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Assurance.
                              </h5>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End: Sidebar */}
              </div>
            </div>
            <div className="col-md-6 col-xl-10 offset-xl-0" id="rightNav">
              <div
                className="d-xl-flex justify-content-xl-end align-items-xl-center"
                id="rightNavContainer"
              >
                <div
                  className="d-xl-flex justify-content-xl-end align-items-xl-center"
                  id="rightNavContainer2"
                >
                  <nav className="navbar navbar-light navbar-expand  topbar static-top">
                    <div className="container-fluid">
                      <ul className="navbar-nav flex-nowrap ml-auto">
                        <li className="nav-item dropdown d-sm-none no-arrow">
                          <a
                            aria-expanded="false"
                            data-toggle="dropdown"
                            className="dropdown-toggle nav-link"
                            href="#"
                          >
                            <i className="fas fa-search" />
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
                            aria-labelledby="searchDropdown"
                          >
                            <form className="form-inline mr-auto navbar-search w-100">
                              <div className="input-group">
                                <Link
                                  type="text"
                                  className="bg-light form-control border-0 small"
                                  placeholder="Search for ..."
                                />
                                <div className="input-group-append">
                                  <button
                                    className="btn btn-primary py-0"
                                    type="button"
                                  >
                                    <i className="fas fa-search" />
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="nav-item dropdown no-arrow mx-1">
                          <div className="nav-item dropdown no-arrow">
                            <a
                              aria-expanded="false"
                              data-toggle="dropdown"
                              className="dropdown-toggle nav-link"
                              href="#"
                            >
                              <span className="badge badge-danger badge-counter">
                                3+
                              </span>
                              <i className="fas fa-bell fa-fw" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-list animated--grow-in">
                              <h6 className="dropdown-header">alerts center</h6>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="mr-3">
                                  <div className="bg-primary icon-circle">
                                    <i className="fas fa-file-alt text-white" />
                                  </div>
                                </div>
                                <div>
                                  <span className="small text-gray-500">
                                    December 12, 2021
                                  </span>
                                  <p>
                                    Votre rapport mensuel de santé est prêt à
                                    être téléchargé !
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="mr-3">
                                  <div className="bg-success icon-circle">
                                    <i className="fas fa-donate text-white" />
                                  </div>
                                </div>
                                <div>
                                  <span className="small text-gray-500">
                                    December 7, 2021
                                  </span>
                                  <p>
                                    Docteur BENGHANEM a consulté votre dossier
                                    médical.
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="mr-3">
                                  <div className="bg-warning icon-circle">
                                    <i className="fas fa-exclamation-triangle text-white" />
                                  </div>
                                </div>
                                <div>
                                  <span className="small text-gray-500">
                                    December 2, 2021
                                  </span>
                                  <p>Votre profil est désormais à jour.</p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item text-center small text-gray-500"
                                href="#"
                              >
                                Show All Alerts
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item dropdown no-arrow mx-1">
                          <div className="nav-item dropdown no-arrow">
                            <a
                              aria-expanded="false"
                              data-toggle="dropdown"
                              className="dropdown-toggle nav-link"
                              href="#"
                            >
                              <span className="badge badge-danger badge-counter">
                                7
                              </span>
                              <i className="fas fa-envelope fa-fw" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-list animated--grow-in">
                              <h6 className="dropdown-header">alerts center</h6>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="dropdown-list-image mr-3">
                                  <img
                                    className="rounded-circle"
                                    src="avatars/avatar4.jpeg"
                                  />
                                  <div className="bg-success status-indicator" />
                                </div>
                                <div className="font-weight-bold">
                                  <div className="text-truncate">
                                    <span>
                                      Bonjour, c'est votre docteur BOUBOUH,
                                      pouvez-vous me donner accès à votre
                                      dossier médical ?
                                    </span>
                                  </div>
                                  <p className="small text-gray-500 mb-0">
                                    BOUBOUH Ayman - 58m
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="dropdown-list-image mr-3">
                                  <img
                                    className="rounded-circle"
                                    src="avatars/avatar2.jpeg"
                                  />
                                  <div className="status-indicator" />
                                </div>
                                <div className="font-weight-bold">
                                  <div className="text-truncate">
                                    <span>
                                      N'oubliez pas votre consultation le Lundi
                                      prochain
                                    </span>
                                  </div>
                                  <p className="small text-gray-500 mb-0">
                                    Dr. BENISS Meryem - 1d
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="dropdown-list-image mr-3">
                                  <img
                                    className="rounded-circle"
                                    src="avatars/avatar3.jpeg"
                                  />
                                  <div className="bg-warning status-indicator" />
                                </div>
                                <div className="font-weight-bold">
                                  <div className="text-truncate">
                                    <span>
                                      Votre dossier CNSS nécessite votre
                                      attention !
                                    </span>
                                  </div>
                                  <p className="small text-gray-500 mb-0">
                                    CNSS - 2d
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="dropdown-list-image mr-3">
                                  <img
                                    className="rounded-circle"
                                    src="avatars/avatar5.jpeg"
                                  />
                                  <div className="bg-success status-indicator" />
                                </div>
                                <div className="font-weight-bold">
                                  <div className="text-truncate">
                                    <span>
                                      Avez vous oubliez de mettre à jour vos
                                      métriques de santé ?
                                    </span>
                                  </div>
                                  <p className="small text-gray-500 mb-0">
                                    Sihat-e· 2w
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item text-center small text-gray-500"
                                href="#"
                              >
                                Show All Alerts
                              </a>
                            </div>
                          </div>
                          <div
                            className="shadow dropdown-list dropdown-menu dropdown-menu-right"
                            aria-labelledby="alertsDropdown"
                          />
                        </li>
                        <div className="d-none d-sm-block topbar-divider" />
                        <li className="nav-item dropdown no-arrow">
                          <div className="nav-item dropdown no-arrow">
                            <a
                              aria-expanded="false"
                              data-toggle="dropdown"
                              className="dropdown-toggle nav-link"
                              href="#"
                            >
                              <span className="d-none d-lg-inline mr-2 text-gray-600 small">
                                {!patientData.about_reducer.patients[0]
                                  ? "loading"
                                  : patientData.about_reducer.patients[0]
                                      .email === undefined
                                  ? " "
                                  : patientData.about_reducer.patients[0].email}
                              </span>
                              <img
                                className="border rounded-circle img-profile"
                                src="avatars/avatar1.jpeg"
                              />
                            </a>
                            <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in">
                              <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                                &nbsp;Profile
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                                &nbsp;Settings
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                                &nbsp;Activity log
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item"
                                href="#"
                                onClick={this.patientDashboarLogout}
                              >
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                &nbsp;Logout
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div>
                <FormDashboardPatient
                  // initialValues={_.pick(this.props.aboutInfos.first_name, 'first_name')}
                  // initialValues={_.pick(this.props.aboutInfos, 'first_name', 'last_name', 'birth_day', 'date', 'adress', 'bio_sex'	)}

                  // initialValues={{first_name: this.props.aboutInfos[0].data.first_name}}
                  onSubmit={this.onSubmit}
                />
                {this.rendertiwtiw()}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { aboutInfos: state.aboutInfos };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchAboutInfos,
    },
    dispatch
  );
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//       something: () => dispatch(aboutInfos.fetchAboutInfos()),
//     };
//   };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPatientEdit);

// const errorsHelper = ({error, touched}) => {
//     if (touched && error) {
//         return (
//             <>

//                 <div className='taken'>
//                     <div>
//                         <strong> &#9888; Attention &#9888; </strong>
//                         {error}
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

// const renderInput = (props) => {
//     const {input, value, meta, label, placeholder, name, id, type, className, initialValues} = props;
//     return (
//         <>
//             {   errorsHelper(meta)    }
//             <div className="col-sm-6 col-xl-7 input-column">
//                 <div className="form-row form-group">
//                 <label className="active col-form-label d-xl-flex align-items-xl-start">{label}</label>
//                 <Link {...input}
//                 className={className}
//                 autocomplete='nope'
//                 placeholder={placeholder}
//                 onChange={input.onChange}
//                 // value={input.value}

//                 name={name}
//                 type={type}
//                 id={id}
//                 />
//                 </div>
//             </div>
//         </>
//     )
// }

// const DashboardPatient = ( props ) => {
//     const {aboutInfos, logout, handleSubmit, createAbout, fetchAboutInfos,  initialValues} = props
// useEffect(() => {
//     fetchAboutInfos()

// console.log(aboutInfos[0].data) throw : {id: 7, user_id: 6, first_name: "AVC", last_name: "AAA", birth_day: null, …}
// }, [])
//             const data = {
//     initialValues
// }

// alert(data)

// if( !aboutInfos[0]) {   ====> '' else if aboutInfos[0] {
// {Response.data.valueETC}
// }

// const renderFetchAboutInfos = () => {
//     if(!aboutInfos[0]) {
//         return (
//             <>

//             </>
//         )
//     }
// }
// console.log(Object.values(Object.values(aboutInfos[0])))
// console.log(initialValues.data)

// console.log(fetchAboutInfos())

// if(fetchAboutInfos.PatientAboutInfosNotInfos)

// const renderList = () => {
//     if(fetchAboutInfos() == true ) {
//         return (
//             <>
//             <div className="item" key={props.aboutInfos[0].data.id}>
//                 <div className='content'> {props.aboutInfos[0].data.first_name} </div>
//             </div>

//             </>
//         )
//     }
// console.log(aboutInfos[0].data)

//     }

//     const patientDashboarLogout = () => {
//         logout()
//     }

// const onSubmit = (formValues) => {
// if( !aboutInfos[0]) {
//     createAbout(formValues)
// } else {
//     fetchAboutInfos()
// }

// }

// return(

//         <>

//         </>
//     )

// }

// mapStateToProps = (state) => {

// }

// const  formWrapper = reduxForm({ form: 'dashboardPatientForm', enableReinitialize: true })(DashboardPatient)

// export default connect(null, {logout, createAbout, fetchAboutInfos, })(formWrapper);
