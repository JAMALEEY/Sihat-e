// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { logout, createAbout, fetchAboutInfos, editAboutInfos } from "../../../actions";
// import {Link} from 'react-router-dom';
// import { Field, reduxForm } from "redux-form";
// import { first } from "lodash";
// import Loader from "../../../helpers/Loader";
// import axios from "axios";
// import Files from './Files';

// class UploadDashboardPatient extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             file: "",
//             responseMsg: {
//                 status: "",
//                 message: "",
//                 error: "",
//             },
//         };
//     }

//        // file onchange hander
//        handleChange = (e) => {
//         this.setState({
//             file: e.target.files[0]
//         })
//     }

//         // file submit handler
//         submitHandler = (e) => {
//             e.preventDefault();
//             const data = new FormData() 
//             data.append('files', this.state.file)
    
//             axios.post("http://localhost:8000/api/files", data)
//             .then((response) => {
//                 if (response.status === 200) {
//                 this.setState({
//                     responseMsg: {
//                     status: response.data.status,
//                     message: response.data.message,
//                     },
//                 });
//                 setTimeout(() => {
//                     this.setState({
//                     file: "",
//                     responseMsg: "",
//                     });
//                 }, 2000);
    
//                 document.querySelector("#fileForm").reset();
//                 // getting uploaded files
//                 this.refs.child.getFiles();
//                 }
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//         }



//     componentDidMount() {
//     this.props.fetchAboutInfos();
//     console.log(this.props)
//     }

//     renderInput({
//     handleSubmit,
//     input,
//     value,
//     meta,
//     label,
//     placeholder,
//     name,
//     id,
//     type,
//     className,
//     initialValues,
//     defaultValue,
//     defaultChecked,
//     checked,
//   }) 
  
//   {
//     return (
//       <>
//         <div className="col-sm-6 col-xl-7 input-column">
//           <div className="form-row form-group">
//             <label className="active col-form-label d-xl-flex align-items-xl-start">
//               {label}
//             </label>
//             <input
//               {...input}
//               className={className}
//               autoComplete="none"
//               placeholder={placeholder}
//               onChange={input.onChange}
//               value={input.value}
//               name={name}
//               type={type}
//               id={id}
//             />
//           </div>
//         </div>
//       </>
//     );
//   }

//   // handleChange(e) {
//   //     const { target}  = this.event;
//   //     const value = target.type === 'checkbox' ? target.checked : target.value;
//   //     const { name }  = target;

//   //     this.setState({
//   //     [name]: value
//   //     });
//   // }
//   // onSubmit = (formValues) => {
//   //   this.props.onSubmit(formValues);
//   // };


 

//   onSubmit = (formValues) => {
//     console.log(formValues)

//     // console.log(this.props)

//     // alert(this.props.patientData.about_reducer.patients)
//     if (typeof this.props.patientData.about_reducer.patients === 'undefined' ) {

//       this.props.createAbout(formValues);
//     } else {
//       this.props.editAboutInfos(formValues);
//     }
//   }; 




//   render() {

//     return this.props.patientData.about_reducer.loading ? (
//       <div className=''>
//               <Loader />
//       </div>
//       ) : this.props.patientData.about_reducer.error ? (
//         <h2>{this.props.patientData.about_reducer.error}</h2>
//       ) : (

//         <>
//          <div>
//           <div className="row" id="navRow">
//             <div
//               className="col-md-6 col-xl-2 offset-xl-0"
//               id="leftMenuContainer"
//             >
//               <div id="logoNavContainer">
//                 <div
//                   className="d-flex d-xl-flex flex-row justify-content-between align-items-center justify-content-xl-center align-items-xl-center"
//                   id="headingNavContainer"
//                 >
//                   <div
//                     className="d-flex d-xl-flex justify-content-xl-center align-items-xl-center"
//                     id="logoDashboard"
//                   >
//                     <img src="../../../assets/img/Sicon.png" />
//                   </div>
//                   <h1>
//                     MON COMPTE
//                     <span>
//                       <br />
//                       <strong>ACCUEIL</strong>
//                       <br />
//                       <br />
//                       <br />
//                     </span>
//                   </h1>
//                 </div>
//               </div>
//               <div>
//                 {/* Start: Sidebar */}
//                 <div id="sidebar-main" className="sidebar sidebar-default">
//                   <div className="sidebar-category sidebar-default">
//                     <div className="category-title"></div>
//                     <div className="category-content">
//                       <ul id="fruits-nav" className="nav flex-column">
//                         <li className="nav-item1">
//                           <Link
//                             to="dashboardPatient"
//                             className="nav-link active"
//                           >
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="active fa fa-user-circle-o fa-2x d-xl-flex align-items-xl-center "
//                                 aria-hidden="true"
//                               />
//                               <h5 className="lisidebar d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//                                 A propos.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                         <li className="nav-item2">
//                           <Link
//                             to="/contactinformation"
//                             className="nav-link"
//                             activeClassName="active"
//                           >
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="noactive fa fa-vcard d-xl-flex align-items-xl-center d-xl-flex align-items-xl-center fa-2x "
//                                 aria-hidden="true"
//                               />
//                               <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//                                 Informations de contact.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                         <li className="nav-item3">
//                           <Link to="/Metrix" className="nav-link">
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="noactive fa fa-bar-chart-o d-xl-flex align-items-xl-center fa-2x "
//                                 aria-hidden="true"
//                               />
//                               <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//                                 Métriques de santé.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                         <li className="nav-item4">
//                           <Link to="#" className="nav-link">
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="noactive fa fa-heartbeat d-xl-flex align-items-xl-center fa-2x "
//                                 aria-hidden="true"
//                               />
//                               <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//                                 Symptomes.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                         <li className="nav-item5">
//                           <Link to="#" className="nav-link">
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="noactive fa fa-file-powerpoint-o d-xl-flex align-items-xl-center fa-2x "
//                                 aria-hidden="true"
//                               />
//                               <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//                                 Ordonnances.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                         <li className="nav-item6">
//                           <Link to="#" className="nav-link">
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="noactive fa fa-leaf d-xl-flex align-items-xl-center fa-2x "
//                                 aria-hidden="true"
//                               />
//                               <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//                                 Médicaments.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                         <li className="nav-item7">
//                           <Link to="#" className="nav-link">
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="noactive fa fa-low-vision d-xl-flex align-items-xl-center  fa-2x "
//                                 aria-hidden="true"
//                               />
//                               <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//                                 Allergies.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                         <li className="nav-item8">
//                           <Link to="#" className="nav-link">
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="noactive fa fa-stethoscope d-xl-flex align-items-xl-center fa-2x "
//                                 aria-hidden="true"
//                               />
//                               <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//                                 Traitement / procédures.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                         <li className="nav-item9">
//                           <Link to="#" className="nav-link">
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="noactive fa fa-user-md d-xl-flex align-items-xl-center fa-2x "
//                                 aria-hidden="true"
//                               />
//                               <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//                                 Vaccinations.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                         <li className="nav-item10">
//                           <Link to="#" className="nav-link">
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="noactive fa fa-flask d-xl-flex align-items-xl-center fa-2x "
//                                 aria-hidden="true"
//                               />
//                               <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//                                 Tests de laboratoire.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                         <li className="nav-item11">
//                           <Link to="#" className="nav-link">
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="noactive fa fa-grav d-xl-flex align-items-xl-center fa-2x "
//                                 aria-hidden="true"
//                               />
//                               <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//                                 Mode de vie.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                         <li className="nav-item12">
//                           <Link to="#" className="nav-link">
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="noactive fa fa-life-saver d-xl-flex align-items-xl-center fa-2x "
//                                 aria-hidden="true"
//                               />
//                               <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//                                 Assurance.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                         <li className="nav-item11">
//                           <Link to="/patientUpload" className="nav-link">
//                             <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//                               <i
//                                 className="noactive fas fa-folder-open d-xl-flex align-items-xl-center fa-2x "
//                                 aria-hidden="true" style={{color: '#488b76'}}
//                               />
//                               <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center" 
//                               >
//                                 Mon dossier medical.
//                               </h5>
//                             </div>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//                 {/* End: Sidebar */}
//               </div>
//             </div>
//             <div className="col-md-6 col-xl-10 offset-xl-0" id="rightNav">
//               <div
//                 className="d-xl-flex justify-content-xl-end align-items-xl-center"
//                 id="rightNavContainer"
//               >
//                 <div
//                   className="d-xl-flex justify-content-xl-end align-items-xl-center"
//                   id="rightNavContainer2"
//                 >
//                   <nav className="navbar navbar-light navbar-expand  topbar static-top">
//                     <div className="container-fluid">
//                       <ul className="navbar-nav flex-nowrap ml-auto">
//                         <li className="nav-item dropdown d-sm-none no-arrow">
//                           <Link
//                             aria-expanded="false"
//                             data-toggle="dropdown"
//                             className="dropdown-toggle nav-link"
//                             to="#"
//                           >
//                             <i className="fas fa-search" />
//                           </Link>
//                           <div
//                             className="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
//                             aria-labelledby="searchDropdown"
//                           >
//                             <form className="form-inline mr-auto navbar-search w-100">
//                               <div className="input-group">
//                                 <Link
//                                   type="text"
//                                   className="bg-light form-control border-0 small"
//                                   placeholder="Search for ..."
//                                 />
//                                 <div className="input-group-append">
//                                   <button
//                                     className="btn btn-primary py-0"
//                                     type="button"
//                                   >
//                                     <i className="fas fa-search" />
//                                   </button>
//                                 </div>
//                               </div>
//                             </form>
//                           </div>
//                         </li>
//                         <li className="nav-item dropdown no-arrow mx-1">
//                           <div className="nav-item dropdown no-arrow">
//                             <Link
//                               aria-expanded="false"
//                               data-toggle="dropdown"
//                               className="dropdown-toggle nav-link"
//                               to="#"
//                             >
//                               <span className="badge badge-danger badge-counter">
//                                 3+
//                               </span>
//                               <i className="fas fa-bell fa-fw" />
//                             </Link>
//                             <div className="dropdown-menu dropdown-menu-right dropdown-list animated--grow-in">
//                               <h6 className="dropdown-header">alerts center</h6>
//                               <Link
//                                 className="dropdown-item d-flex align-items-center"
//                                 to="#"
//                               >
//                                 <div className="mr-3">
//                                   <div className="bg-primary icon-circle">
//                                     <i className="fas fa-file-alt text-white" />
//                                   </div>
//                                 </div>
//                                 <div>
//                                   <span className="small text-gray-500">
//                                     December 12, 2021
//                                   </span>
//                                   <p>
//                                     Votre rapport mensuel de santé est prêt à
//                                     être téléchargé !
//                                   </p>
//                                 </div>
//                               </Link>
//                               <Link
//                                 className="dropdown-item d-flex align-items-center"
//                                 to="#"
//                               >
//                                 <div className="mr-3">
//                                   <div className="bg-success icon-circle">
//                                     <i className="fas fa-donate text-white" />
//                                   </div>
//                                 </div>
//                                 <div>
//                                   <span className="small text-gray-500">
//                                     December 7, 2021
//                                   </span>
//                                   <p>
//                                     Docteur BENGHANEM a consulté votre dossier
//                                     médical.
//                                   </p>
//                                 </div>
//                               </Link>
//                               <Link
//                                 className="dropdown-item d-flex align-items-center"
//                                 to="#"
//                               >
//                                 <div className="mr-3">
//                                   <div className="bg-warning icon-circle">
//                                     <i className="fas fa-exclamation-triangle text-white" />
//                                   </div>
//                                 </div>
//                                 <div>
//                                   <span className="small text-gray-500">
//                                     December 2, 2021
//                                   </span>
//                                   <p>Votre profil est désormais à jour.</p>
//                                 </div>
//                               </Link>
//                               <Link
//                                 className="dropdown-item text-center small text-gray-500"
//                                 to="#"
//                               >
//                                 Show All Alerts
//                               </Link>
//                             </div>
//                           </div>
//                         </li>

//                         <li className="nav-item dropdown no-arrow mx-1">
//                           <div className="nav-item dropdown no-arrow">
//                             <Link
//                               aria-expanded="false"
//                               data-toggle="dropdown"
//                               className="dropdown-toggle nav-link"
//                               to="#"
//                             >
//                               <span className="badge badge-danger badge-counter">
//                                 7
//                               </span>
//                               <i className="fas fa-envelope fa-fw" />
//                             </Link>
//                             <div className="dropdown-menu dropdown-menu-right dropdown-list animated--grow-in">
//                               <h6 className="dropdown-header">alerts center</h6>
//                               <Link
//                                 className="dropdown-item d-flex align-items-center"
//                                 to="#"
//                               >
//                                 <div className="dropdown-list-image mr-3">
//                                   <img
//                                     className="rounded-circle"
//                                     src="avatars/avatar4.jpeg"
//                                   />
//                                   <div className="bg-success status-indicator" />
//                                 </div>
//                                 <div className="font-weight-bold">
//                                   <div className="text-truncate">
//                                     <span>
//                                       Bonjour, c'est votre docteur BOUBOUH,
//                                       pouvez-vous me donner accès à votre
//                                       dossier médical ?
//                                     </span>
//                                   </div>
//                                   <p className="small text-gray-500 mb-0">
//                                     BOUBOUH Ayman - 58m
//                                   </p>
//                                 </div>
//                               </Link>
//                               <Link
//                                 className="dropdown-item d-flex align-items-center"
//                                 to="#"
//                               >
//                                 <div className="dropdown-list-image mr-3">
//                                   <img
//                                     className="rounded-circle"
//                                     src="avatars/avatar2.jpeg"
//                                   />
//                                   <div className="status-indicator" />
//                                 </div>
//                                 <div className="font-weight-bold">
//                                   <div className="text-truncate">
//                                     <span>
//                                       N'oubliez pas votre consultation le Lundi
//                                       prochain
//                                     </span>
//                                   </div>
//                                   <p className="small text-gray-500 mb-0">
//                                     Dr. BENISS Meryem - 1d
//                                   </p>
//                                 </div>
//                               </Link>
//                               <Link
//                                 className="dropdown-item d-flex align-items-center"
//                                 to="#"
//                               >
//                                 <div className="dropdown-list-image mr-3">
//                                   <img
//                                     className="rounded-circle"
//                                     src="avatars/avatar3.jpeg"
//                                   />
//                                   <div className="bg-warning status-indicator" />
//                                 </div>
//                                 <div className="font-weight-bold">
//                                   <div className="text-truncate">
//                                     <span>
//                                       Votre dossier CNSS nécessite votre
//                                       attention !
//                                     </span>
//                                   </div>
//                                   <p className="small text-gray-500 mb-0">
//                                     CNSS - 2d
//                                   </p>
//                                 </div>
//                               </Link>
//                               <Link
//                                 className="dropdown-item d-flex align-items-center"
//                                 to="#"
//                               >
//                                 <div className="dropdown-list-image mr-3">
//                                   <img
//                                     className="rounded-circle"
//                                     src="avatars/avatar5.jpeg"
//                                   />
//                                   <div className="bg-success status-indicator" />
//                                 </div>
//                                 <div className="font-weight-bold">
//                                   <div className="text-truncate">
//                                     <span>
//                                       Avez vous oubliez de mettre à jour vos
//                                       métriques de santé ?
//                                     </span>
//                                   </div>
//                                   <p className="small text-gray-500 mb-0">
//                                     Sihat-e· 2w
//                                   </p>
//                                 </div>
//                               </Link>
//                               <Link
//                                 className="dropdown-item text-center small text-gray-500"
//                                 to="#"
//                               >
//                                 Show All Alerts
//                               </Link>
//                             </div>
//                           </div>
//                           <div
//                             className="shadow dropdown-list dropdown-menu dropdown-menu-right"
//                             aria-labelledby="alertsDropdown"
//                           />
//                         </li>
//                         <div className="d-none d-sm-block topbar-divider" />
//                         <li className="nav-item dropdown no-arrow">
//                           <div className="nav-item dropdown no-arrow">
//                             <Link
//                               aria-expanded="false"
//                               data-toggle="dropdown"
//                               className="dropdown-toggle nav-link"
//                               to="#"
//                             >
//                               <span className="d-none d-lg-inline mr-2 text-gray-600 ">
//                                 {!this.props.patientData.about_reducer
//                                   .patients[0]
//                                   ? "loading"
//                                   : this.props.patientData.about_reducer
//                                       .patients[0].email === undefined
//                                   ? " "
//                                   : this.props.patientData.about_reducer
//                                       .patients[0].email}
//                               </span>
//                               <img
//                                 className="border rounded-circle img-profile"
//                                 src="avatars/avatar1.jpeg"
//                               />
//                             </Link>
//                             <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in">
//                               <Link className="dropdown-item" to="#">
//                                 <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
//                                 &nbsp;Profile
//                               </Link>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
//                                 &nbsp;Settings
//                               </Link>
//                               <Link className="dropdown-item" to="#">
//                                 <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
//                                 &nbsp;Activity log
//                               </Link>
//                               <div className="dropdown-divider" />
//                               <div
//                                 className="dropdown-item"
                                
//                                 onClick={this.patientDashboarLogout}
//                               >
//                                 <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
//                                 &nbsp;Logout
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                   </nav>
//                 </div>
//               </div>
//     <div className="d-xl-flex justify-content-xl-center align-items-xl-center" style={{width: '90%', height: '97%'}}>
//       <div style={{width: '37vw', height: '80vh', borderRadius: '20px', margin: '50px', boxShadow: '0px 0px 7px rgb(207,207,207)', background: 'rgb(255,255,255)', borderStyle: 'none'}}>
//         <div>
//           {/* Start: Pretty Registration Form */}
//           <div className="row register-form">
//             <div className="col-md-8 col-xl-10 offset-md-2 offset-xl-0">
//               <form onSubmit={this.submitHandler} encType="multipart/form-data" className="custom-form" style={{borderRadius: '25px', width: '704.984px'}}>
//                 <div>
//                   <h1 className="d-xl-flex align-items-xl-start" style={{width: '386px', fontFamily: 'Poppins, sans-serif'}}><strong>Télécharger votre dossier</strong></h1>
//                   <div />
//                   <div className="d-xl-flex flex-column justify-content-xl-center align-items-xl-center" style={{width: '100%'}}><img src="/assets/img/Tempclipboard-image.png?h=5bea8dd115774d6f8aecb9fc7f667d12" />
//                     <div className="file-upload-wrapper"><input className="form-control-file" type="file" id="uploadinput"  onChange={this.handleChange}  /><label htmlFor="uploadinput"><img src="/assets/img/uploadIcon.png?h=35a54f92288b25c47023a7e5ffa391b4" type="file" htmlFor="upload" style={{cursor: 'pointer'}}  /></label></div>
//                     <h6 style={{fontFamily: 'Poppins, sans-serif'}}><strong>Sélectionnez ou déposez des fichiers ici</strong></h6>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>{/* End: Pretty Registration Form */}
//         </div>
//       </div>
//     </div>


//     {this.state.responseMsg.status === "successs" ? (
//                   <div className="alert alert-success">
//                     {this.state.responseMsg.message}
//                   </div>
//                 ) : this.state.responseMsg.status === "failed" ? (
//                   <div className="alert alert-danger">
//                     {this.state.responseMsg.message}
//                   </div>
//                 ) : (
//                   ""
//                 )}
//   <span className="text-danger">
//                       {this.state.responseMsg.error}
//                     </span>







//                     {/* TEST .////////////////////////////////////////// */}
//                     <div className="container py-5">
//         <div className="row">
//           <div className="col-xl-6 col-lg-8 col-md-8 col-sm-12 m-auto">
//             <form onSubmit={this.submitHandler} encType="multipart/form-data" id="imageForm">
//               <div className="card shadow">
//                 {this.state.responseMsg.status === "successs" ? (
//                   <div className="alert alert-success">
//                     {this.state.responseMsg.message}
//                   </div>
//                 ) : this.state.responseMsg.status === "failed" ? (
//                   <div className="alert alert-danger">
//                     {this.state.responseMsg.message}
//                   </div>
//                 ) : (
//                   ""
//                 )}
//                 <div className="card-header">
//                   <h4 className="card-title fw-bold">
//                     Upload Image in React Using Laravel 8 API
//                   </h4>
//                 </div>

//                 <div className="card-body">
//                   <div className="form-group py-2">
//                     <label htmlFor="images">Images</label>
//                     <input
//                       type="file"
//                       name="image"                      
//                       onChange={this.handleChange}
//                       className="form-control"
//                     />
//                     <span className="text-danger">
//                       {this.state.responseMsg.error}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="card-footer">
//                   <button type="submit" className="btn btn-success">
//                     Upload
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>

//         <Files ref="child" />
//       </div>



//   </div>
// </div>
// </div>

//         </>

//     );
//   }
// }






// const mapStateToProps = (state,props) => {
//   return {
//     patientData: state, 
//   };
// };

// const mapDispatchToProps = (dispatch, formValues) => {
//   return {
//     fetchAboutInfos: () => dispatch(fetchAboutInfos()),
//     createAbout : (formValues) => dispatch(createAbout(formValues)),
//     editAboutInfos : (formValues) => dispatch(editAboutInfos(formValues)),
//     logout: () => dispatch(logout()),


//   };
// };

// UploadDashboardPatient = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(UploadDashboardPatient);

// export default reduxForm({
//     form: 'UploadInfosForm', // a unique name for this form
//     enableReinitialize: true
// })(UploadDashboardPatient);



