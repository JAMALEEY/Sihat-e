import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {  logout, createAbout, fetchAboutInfos  } from '../../actions'
import {Field, formValueSelector, reduxForm, touch} from 'redux-form';

const data = {  // used to populate "account" reducer when "Load" is clicked
  firstName: 'Jane',
  lastName: 'Doe',
  age: '42',
  sex: 'female',
  employed: true,
  favoriteColor: 'Blue',
  bio: 'Born to write amazing Redux code.'
}
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];


        const errorsHelper = ({error, touched}) => {
            if (touched && error) {
                return (
                    <>
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

        const renderInput = (props) => {
            const {input, value, meta, label, placeholder, name, id, type, className} = props;
            return (
                <>
                    {   errorsHelper(meta)    }
                    <div className="col-sm-6 col-xl-7 input-column">
                        <div className="form-row form-group">
                        <label className="active col-form-label d-xl-flex align-items-xl-start">{label}</label>
                        <input {...input}
                        className={className}
                        autocomplete='nope' 
                        placeholder={placeholder} 
                        onChange={input.onChange} 
                        // value={input.value} 
                        
                        name={name}
                        type={type}
                        id={id}
                        />
                        </div>
                    </div>  
                </>
            )
        }

    const DashboardPatient = (props) => {
const         {aboutInfos, logout, handleSubmit, createAbout, fetchAboutInfos,  initialValues, load, pristine, reset, submitting} = props
            useEffect(() => {
                fetchAboutInfos()
                
                // console.log(aboutInfos[0].data) throw : {id: 7, user_id: 6, first_name: "AVC", last_name: "AAA", birth_day: null, …}
            }, [])
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
            const renderList = () => {
            
                    // console.log(aboutInfos[0].data)
                    return (
                        <>
                        <div className="item" key={aboutInfos[0].data.id}>
                            <div className='content'> {aboutInfos[0].data.first_name} </div>
                        </div>

                        </>
                    )
            } 
            const patientDashboarLogout = () => {
                logout()
            }

        const onSubmit = (formValues) => {
            // if( !aboutInfos[0]) {
            //     createAbout(formValues) 
            // } else {
            //     fetchAboutInfos()
            // }
            
        }
            console.log(initialValues)

        return(

                <>
                 <form onSubmit={handleSubmit}>
      <div>
        <button type="button" onClick={() => load(data)}>Load Account</button>
      </div>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Age</label>
        <div>
          <Field name="age" component="input" type="number" placeholder="Age" />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option value="">Select a color...</option>
            {colors.map(colorOption => (
              <option value={colorOption} key={colorOption}>
                {colorOption}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Bio</label>
        <div>
          <Field name="bio" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>

                <div>
                    <div className="row" id="navRow">
                        <div className="col-md-6 col-xl-2 offset-xl-0" id="leftMenuContainer">
                            <div id="logoNavContainer">
                                <div className="d-flex d-xl-flex flex-row justify-content-between align-items-center justify-content-xl-center align-items-xl-center" id="headingNavContainer">
                                    <div className="d-flex d-xl-flex justify-content-xl-center align-items-xl-center" id="logoDashboard"> 
                                        <img src="/assets/img/Sicon.png" />
                                    </div>
                                    <h1>MON COMPTE<span><br /><strong>ACCUEIL</strong><br /><br /><br /></span></h1>
                                </div>
                            </div>
                        <div>
                                                {/* Start: Sidebar */}
                        <div id="sidebar-main" className="sidebar sidebar-default">
                <div className="sidebar-category sidebar-default">
                <div className="category-title">
                </div>
                <div className="category-content">
                    <ul id="fruits-nav" className="nav flex-column">
                    <li className="nav-item1">
                        <a href="#" className="nav-link active">
                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
                            <i className="active fa fa-user-circle-o fa-2x d-xl-flex align-items-xl-center " aria-hidden="true" />
                            <h5 className="lisidebar d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                            A propos.
                            </h5>
                        </div>
                        </a>
                    </li><li className="nav-item2">
                        <a href="#" className="nav-link">
                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
                            <i className="noactive fa fa-vcard d-xl-flex align-items-xl-center d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
                            <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                            Informations de contact.
                            </h5>                    
                        </div>
                        </a>
                    </li>
                    <li className="nav-item3">
                        <a href="#" className="nav-link">
                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
                            <i className="noactive fa fa-bar-chart-o d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
                            <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                            Métriques de santé.
                            </h5>                    
                        </div>
                        </a>
                    </li>
                    <li className="nav-item4">
                        <a href="#" className="nav-link">
                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
                            <i className="noactive fa fa-heartbeat d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
                            <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                            Conditions / Symptomes.
                            </h5>                    
                        </div>
                        </a>
                    </li>
                    <li className="nav-item5">
                        <a href="#" className="nav-link">
                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
                            <i className="noactive fa fa-file-powerpoint-o d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
                            <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                            Ordonnances.
                            </h5>                    
                        </div>
                        </a>
                    </li>
                    <li className="nav-item6">
                        <a href="#" className="nav-link">
                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
                            <i className="noactive fa fa-leaf d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
                            <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                            Médicaments.
                            </h5>                    
                        </div>
                        </a>
                    </li>
                    <li className="nav-item7">
                        <a href="#" className="nav-link">
                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
                            <i className="noactive fa fa-low-vision d-xl-flex align-items-xl-center  fa-2x " aria-hidden="true" />
                            <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                            Allergies.
                            </h5>                    
                        </div>
                        </a>
                    </li>
                    <li className="nav-item8">
                        <a href="#" className="nav-link">
                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
                            <i className="noactive fa fa-stethoscope d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
                            <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                            Traitement / procédures.
                            </h5>                    
                        </div>
                        </a>
                    </li>
                    <li className="nav-item9">
                        <a href="#" className="nav-link">
                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
                            <i className="noactive fa fa-user-md d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
                            <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                            Vaccinations.
                            </h5>                    
                        </div>
                        </a>
                    </li>
                    <li className="nav-item10">
                        <a href="#" className="nav-link">
                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
                            <i className="noactive fa fa-flask d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
                            <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                            Tests de laboratoire.
                            </h5>                    
                        </div>
                        </a>
                    </li>
                    <li className="nav-item11">
                        <a href="#" className="nav-link">
                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
                            <i className="noactive fa fa-grav d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
                            <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                            Mode de vie.
                            </h5>                    
                        </div>
                        </a>
                    </li>
                    <li className="nav-item12">
                        <a href="#" className="nav-link">
                        <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
                            <i className="noactive fa fa-life-saver d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
                            <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                            Assurance.
                            </h5>                    
                        </div>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>{/* End: Sidebar */}
            </div>
        </div>
        <div className="col-md-6 col-xl-10 offset-xl-0" id="rightNav">
            <div className="d-xl-flex justify-content-xl-end align-items-xl-center" id="rightNavContainer">
            <div className="d-xl-flex justify-content-xl-end align-items-xl-center" id="rightNavContainer2">
                <nav className="navbar navbar-light navbar-expand  topbar static-top">
                <div className="container-fluid">
                    <ul className="navbar-nav flex-nowrap ml-auto">
                    <li className="nav-item dropdown d-sm-none no-arrow"><a aria-expanded="false" data-toggle="dropdown" className="dropdown-toggle nav-link" href="#"><i className="fas fa-search" /></a>
                        <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto navbar-search w-100">
                            <div className="input-group">
                                <input type="text" className="bg-light form-control border-0 small" placeholder="Search for ..." />
                            <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
                            </div>
                        </form>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <div className="nav-item dropdown no-arrow"><a aria-expanded="false" data-toggle="dropdown" className="dropdown-toggle nav-link" href="#"><span className="badge badge-danger badge-counter">3+</span><i className="fas fa-bell fa-fw" /></a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-list animated--grow-in">
                            <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white" /></div>
                            </div>
                            <div><span className="small text-gray-500">December 12, 2019</span>
                                <p>A new monthly report is ready to download!</p>
                            </div>
                            </a><a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="bg-success icon-circle"><i className="fas fa-donate text-white" /></div>
                            </div>
                            <div><span className="small text-gray-500">December 7, 2019</span>
                                <p>$290.29 has been deposited into your account!</p>
                            </div>
                            </a><a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white" /></div>
                            </div>
                            <div><span className="small text-gray-500">December 2, 2019</span>
                                <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                            </div>
                            </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <div className="nav-item dropdown no-arrow"><a aria-expanded="false" data-toggle="dropdown" className="dropdown-toggle nav-link" href="#"><span className="badge badge-danger badge-counter">7</span><i className="fas fa-envelope fa-fw" /></a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-list animated--grow-in">
                            <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="avatars/avatar4.jpeg" />
                                <div className="bg-success status-indicator" />
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                            </div>
                            </a><a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="avatars/avatar2.jpeg" />
                                <div className="status-indicator" />
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                            </div>
                            </a><a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="avatars/avatar3.jpeg" />
                                <div className="bg-warning status-indicator" />
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                            </div>
                            </a><a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="avatars/avatar5.jpeg" />
                                <div className="bg-success status-indicator" />
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                            </div>
                            </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                        </div>
                        <div className="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown" />
                    </li>
                    <div className="d-none d-sm-block topbar-divider" />
                    <li className="nav-item dropdown no-arrow">
                        <div className="nav-item dropdown no-arrow"><a aria-expanded="false" data-toggle="dropdown" className="dropdown-toggle nav-link" href="#"><span className="d-none d-lg-inline mr-2 text-gray-600 small">Valerie Luna</span><img className="border rounded-circle img-profile" src="avatars/avatar1.jpeg" /></a>
                        <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Activity log</a>
                            <div className="dropdown-divider"  />
                            <a className="dropdown-item" href="#" onClick={patientDashboarLogout} >
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"/>&nbsp;Logout</a>

                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav></div></div>
            <div className="d-xl-flex justify-content-xl-center align-items-xl-center">
            <div id="formCardContainer">
                <div>
                {/* Start: Pretty Registration Form */}
                <div className="row register-form">
                    <div className="col-md-8 col-xl-10 offset-md-2 offset-xl-0">
                    <form className="custom-form"  method="post" onSubmit={handleSubmit(onSubmit)} >
                        <h1 className="d-xl-flex align-items-xl-start">A propos</h1>
                           {/* Prénom */}
                        <div>
                        </div>
                        <Field className="form-control-plaintext" name="first_name" component={renderInput} label="Prénom :" placeholder="Votre prénom" type='text' />
                        {/* Nom */}
                        <Field className="form-control-plaintext" name="last_name" component={renderInput} label="Nom :" placeholder="Votre Nom"  />
                        {/* Adresse */}
                        <Field className="form-control-plaintext" name="adress" component={renderInput} label="Adresse :" placeholder="Votre Adresse"  />
                        {/* Date de Naissance */} 
                        <Field className="form-control-plaintext date" name="birth_day" component={renderInput} label="Date de naissance :" id="birthDate" type="date" />

                        <div className="form-row form-group">
                        <div className="col-sm-4 col-xl-7 label-column"><label className="col-form-label d-xl-flex align-items-xl-start" htmlFor="pawssword-input-field">Genre :</label>
                        </div>
                        <div className="col-sm-6 input-column">
                            
                            {/* Start: Bootstrap 4's Custom Radios & Checkboxes */}
                            <div>
                            <fieldset>
                                <legend />
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio1" className="custom-control-input" name="customRadio" defaultChecked />
                                    <label className="custom-control-label" htmlFor="customRadio1">Femme</label></div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio2" className="custom-control-input" name="customRadio" />
                                    <label className="custom-control-label" htmlFor="customRadio2">Homme</label></div>

                            </fieldset>
                            </div>
                            {/* End: Bootstrap 4's Custom Radios & Checkboxes */}
                        </div>
                        </div>
                        
                        <button id="btnFormDashboard" className="btn btn-light align-items-xl-start submit-button" type="submit">Enregistrer</button>
                    </form>
                    </div>
                </div>{/* End: Pretty Registration Form */}
                </div>
            </div>
            </div>
        </div>
        </div>

                </div>
                </>
            )


    }


     
    const mapStateToProps = (state) => {
        return {logout: state.logout,
            aboutInfos: state.aboutInfos,
            initialValues: Object.values(state.aboutInfos)        
        }

    }
    export default reduxForm({ form: 'dashboardPatientForm', enableReinitialize: true})(connect(mapStateToProps, {logout, createAbout, fetchAboutInfos })(DashboardPatient))
    

