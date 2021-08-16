import React, { Component } from "react";
import { connect } from "react-redux";
import { logout, createTaille, fetchTailleInfos, editTaille, deleteTaille } from "../../../../actions";
import {Link} from 'react-router-dom';
import { Field, formValues, reduxForm } from "redux-form";
import { first } from "lodash";
import Modal from '../../Modals/Modal';
import ModalUpdate from '../../Modals/ModalUpdate';
import Loader from "../../../../helpers/Loader";
class MetrixTaille extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      modalTitleEdit: 'Modification de taille',
      modalTitle: 'Ajouter votre Taille',
   
      
      
    
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.showModalCreat = this.showModalCreat.bind(this);
    this.hideModalCreat = this.hideModalCreat.bind(this);
  }

  showModal = () => {
    this.setState({ show2: true });
  };

  hideModal = () => {
    this.setState({ show2: false });
  };

  showModalCreat = () => {
    this.setState({ show: true });
  };

  hideModalCreat = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
   this.props.fetchTailleInfos();
   console.log(this.props)
  }


  creatTaille = (formValues) => {
    this.props.createTaille(formValues);}

    editTaille = (id, formValues) => {
      this.props.editTaille(formValues);}
 

  renderInput({
    handleSubmit,
    input,
    value,
    meta,
    label,
    placeholder,
    name,
    id,
    type,
    className,
    initialValues,
    span
  }) 
  
  {
    return (
      <>
        <div className="col-sm-6 col-xl-7 input-column">
          <div className="form-row form-group">
            <label className="active col-form-label d-xl-flex align-items-xl-start">
              {label}
            </label>
            <div className='renderinputFlexing'>            
            <input
              {...input}
              className={className}
              autoComplete="none"
              placeholder={placeholder}
              onChange={input.onChange}
              value={input.value}
              name={name}
              type={type}
              id={id}
            /> <span>
            {span}
          </span>
          </div>
          </div>
        </div>
      </>
    );
  }

  // handleChange(e) {
  //     const { target}  = this.event;
  //     const value = target.type === 'checkbox' ? target.checked : target.value;
  //     const { name }  = target;

  //     this.setState({
  //     [name]: value
  //     });
  // }
  // onSubmit = (formValues) => {
  //   this.props.onSubmit(formValues);
  // };


 

  // onSubmit = (formValues) => {
    // console.log(this.props)

    // alert(this.props.patientData.about_reducer.patients)
    // if (typeof this.props.createTaille.tailles_reducer.tailles === 'undefined' ) {

    //   this.props.createAbout(formValues);
    // } else {
    //   this.props.editAboutInfos(formValues);
    // }
  // }; 





  renderList() {  
    if (!this.props.tailleData.tailles_reducer.tailles.historique) {
        <Loader />
    }
    else if (this.props.tailleData.tailles_reducer.tailles.historique) { 
     
      // const id = this.props.tailleData.tailles_reducer.tailles.historique.id;
    return this.props.tailleData.tailles_reducer.tailles.historique
    .map(thetailleData => {
      return (
        <div key={thetailleData.id}>

 <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div id='taillemetricyourmetric'>
                        <div>
                            {console.log(this.id)}
                            
                            <p>
                            <strong>
                            Ma taille est de : {thetailleData.cm} cm
                            </strong>
                            </p>
                            <strong>

                            
                            <p>
                            au : {thetailleData.date}
                            </p>
                            </strong>
 
          {/* {this.upd = (formValues) => {this.props.editTaille(thetailleData.id, formValues)}} */}
        {/* Creat */}
        { this.editTaille = (formValues) => this.props.editTaille(thetailleData.id, formValues)} 

        <ModalUpdate edit={this.props.handleSubmit(this.editTaille)} id={this.state.id} date={this.state.date} mesures={this.state.mesures} modalTitle={this.state.modalTitleEdit} show2={this.state.show2} handleClose={this.hideModal}>
        
                              {/* children */}
          <strong><p>Mesures :</p></strong>
          <Field
                          className="form-control"
                          name="cm"
                          component={this.renderInput}
                          label="Modifier votre taille :"
                          placeholder="Votre taille"
                          type="text"
                          span='Cm'
                        /> 
                        Cette mesure date de: {thetailleData.date}
        </ModalUpdate>
                        </div>

                            <div>

                            <div className='dropdown'>
                            <button role="button" type="button" class="btn" data-toggle="dropdown">
                            <i className="far fa-edit"></i> 
                            </button>
                            
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {/* <Modal title="Ajouter" />
                            <ModalUpdate title="Modifier" /> */}
        {/* // content={this.renderContent()}
        // actions={this.renderActions()}
        // onDismiss={() => history.push('/')} */}
      
      { this.del = () => this.props.deleteTaille(thetailleData.id)} 
      {/* {this.supp  = () => {  this.props.deleteTaille(this.props.thetailleData.id)}} */}
    <Link class="dropdown-item" onClick={this.showModal} >Modifier</Link>
    <Link class="dropdown-item" onClick={this.del}>Supprimer</Link>

  </div>                     
                            </div>
                            </div>
                    </div>
        </div>
      );
    });
  } else {

  }
  }







  render() {
    return this.props.tailleData.tailles_reducer.loading 
    ? 
    (              
      <Loader />
      ) 
    : 
    this.props.tailleData.tailles_reducer.error 
    ? 
    ( <h2>{this.props.tailleData.tailles_reducer.error}</h2> )
    : 
    (


      
      <>          











{/* HERE I RENDER THE SIDEBAR/ NAVBAR ... */}
<div>
  <div className="row" id="navRow">
<div className="col-md-6 col-xl-2 offset-xl-0" id="leftMenuContainer">
<div id="logoNavContainer">
<div className="d-flex d-xl-flex flex-row justify-content-between align-items-center justify-content-xl-center align-items-xl-center" id="headingNavContainer">
<div className="d-flex d-xl-flex justify-content-xl-center align-items-xl-center" id="logoDashboard"> 
<img src="../../../assets/img/Sicon.png" />
</div>
<h1>MON COMPTE<span><br /><strong>ACCUEIL</strong><br /><br /><br /></span></h1>
</div>
</div>
<div>
{/* Start: Sidebar */}<div id="sidebar-main" className="sidebar sidebar-default">
<div className="sidebar-category sidebar-default">
<div className="category-title">
</div>
<div className="category-content">
  <ul id="fruits-nav" className="nav flex-column">
  <li className="nav-item1">
      <Link to="/dashboardPatient" className="nav-link ">
      <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
          <i className="active fa fa-user-circle-o fa-2x d-xl-flex align-items-xl-center " aria-hidden="true" />
          <h5 className="lisidebar d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
          A propos.
          </h5>
      </div>
      </Link>
  </li><li className="nav-item2 ">
      <Link to="/ContactInformation" className="nav-link ">
      <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
          <i className="noactive fa fa-vcard d-xl-flex align-items-xl-center d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
          <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
          Informations de contact.
          </h5>                    
      </div>
      </Link>
  </li>
  <li className="nav-item3">
      <Link to="/metrix" className="nav-link active">
      <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
          <i className="noactive fa fa-bar-chart-o d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
          <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
          Métriques de santé.
          </h5>                    
      </div>
      </Link>
  </li>
  <li className="nav-item4">
      <Link to="#" className="nav-link">
      <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
          <i className="noactive fa fa-heartbeat d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
          <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
          Symptomes.
          </h5>                    
      </div>
      </Link>
  </li>
  <li className="nav-item5">
      <Link to="#" className="nav-link">
      <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
          <i className="noactive fa fa-file-powerpoint-o d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
          <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
          Ordonnances.
          </h5>                    
      </div>
      </Link>
  </li>
  <li className="nav-item6">
      <Link to="#" className="nav-link">
      <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
          <i className="noactive fa fa-leaf d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
          <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
          Médicaments.
          </h5>                    
      </div>
      </Link>
  </li>
  <li className="nav-item7">
      <Link to="#" className="nav-link">
      <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
          <i className="noactive fa fa-low-vision d-xl-flex align-items-xl-center  fa-2x " aria-hidden="true" />
          <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
          Allergies.
          </h5>                    
      </div>
      </Link>
  </li>
  <li className="nav-item8">
      <Link to="#" className="nav-link">
      <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
          <i className="noactive fa fa-stethoscope d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
          <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
          Traitement / procédures.
          </h5>                    
      </div>
      </Link>
  </li>
  <li className="nav-item9">
      <Link to="#" className="nav-link">
      <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
          <i className="noactive fa fa-user-md d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
          <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
          Vaccinations.
          </h5>                    
      </div>
      </Link>
  </li>
  <li className="nav-item10">
      <Link to="#" className="nav-link">
      <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
          <i className="noactive fa fa-flask d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
          <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
          Tests de laboratoire.
          </h5>                    
      </div>
      </Link>
  </li>
  <li className="nav-item11">
      <Link to="#" className="nav-link">
      <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
          <i className="noactive fa fa-grav d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
          <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
          Mode de vie.
          </h5>                    
      </div>
      </Link>
  </li>
  <li className="nav-item12">
      <Link to="#" className="nav-link">
      <div className="d-xl-flex justify-content-xl-start align-items-xl-center"> 
          <i className="noactive fa fa-life-saver d-xl-flex align-items-xl-center fa-2x " aria-hidden="true" />
          <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
          Assurance.
          </h5>                    
      </div>
      </Link>
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
  <li className="nav-item dropdown d-sm-none no-arrow"><a aria-expanded="false" data-toggle="dropdown" className="dropdown-toggle nav-link" href="#"><i className="fas fa-search" /> </a>
      <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" aria-labelledby="searchDropdown">
      <form className="form-inline mr-auto navbar-search w-100">
          <div className="input-group"><Link type="text" className="bg-light form-control border-0 small" placeholder="Search for ..." />
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
          <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="avatars/Linkvatar4.jpeg" />
              <div className="bg-success status-indicator" />
          </div>
          <div className="font-weight-bold">
              <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
              <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
          </div>
          </a><a className="dropdown-item d-flex align-items-center" href="#">
          <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="avatars/Linkvatar2.jpeg" />
              <div className="status-indicator" />
          </div>
          <div className="font-weight-bold">
              <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
              <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
          </div>
          </a><a className="dropdown-item d-flex align-items-center" href="#">
          <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="avatars/Linkvatar3.jpeg" />
              <div className="bg-warning status-indicator" />
          </div>
          <div className="font-weight-bold">
              <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
              <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
          </div>
          </a><a className="dropdown-item d-flex align-items-center" href="#">
          <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="avatars/Linkvatar5.jpeg" />
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
      <div className="nav-item dropdown no-arrow"><a aria-expanded="false" data-toggle="dropdown" className="dropdown-toggle nav-link" href="#"><span className="d-none d-lg-inline mr-2 text-gray-600 small">Valerie Luna</span><img className="border rounded-circle img-profile" src="avatars/Linkvatar1.jpeg" /></a>
      <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Activity log</a>
      <div className="dropdown-divider"  />
          <a className="dropdown-item" href="#" onClick={this.patientDashboarLogout} >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"/>&nbsp;Logout</a>

      </div>
      </div>
  </li>
  </ul>
</div>
</nav></div></div> 





















{/*  THE IMPORTANT STUFF TO RENDER */}
<div id="modal" className="d-xl-flex justify-content-xl-center align-items-xl-center">
          <div id="formCardContainer">
            <div>
              <div  className="row register-form">
                <div className="col-md-8 col-xl-10 offset-md-2 offset-xl-0">
                  <form id='metrixForm' className="custom-form" method='post' >
                  

                    <div className="d-xl-flex align-items-xl-start" >
                      <Link to='/metrix'>
                      <i class="fas fa-angle-left fa-2x"></i>
                      </Link>


                                  <h5 className="retourMetrix">Taille.</h5>
                                  </div>

                      {/* End Radios */}
                  </form>
                </div>

              </div>
              {/* End Form */}
              <div className='metrixWrapper'>
              <Modal submit={this.props.handleSubmit(this.creatTaille)} modalTitle={this.state.modalTitle} show={this.state.show} handleClose={this.hideModalCreat}>
                              {/* children */}
          <strong><p>Mesures :</p></strong>
          <Field
                          className="form-control"
                          name="cm"
                          component={this.renderInput}
                          label="Votre taille :"
                          placeholder="Ajouter votre taille en cm"
                          type="text"
                          span='Cm'
          /> 
                        <strong><p>Date de cette Mesure :</p></strong>
          <Field
                          className="form-control"
                          name="date"
                          component={this.renderInput}
                          label="La date de votre mesure :"
                          type="date"
          /> 

                        {/* <strong><p>Date de cette Mesure :</p></strong> */}
        </Modal>
                
                <Link  onClick={this.showModalCreat}  className='fasflex'>
                  <p>
                    Ajouter Votre Taille
                  </p>
                <i className="fas fa-plus fa-2x"></i> 
                </Link>
                    <div id='taillemetricyourmetric'>
                        <div>
                          {/* {console.log(this.props.tailleData.tailles_reducer.tailles.last_height)} */}
                            <h4>
                                Votre mesure la plus récente :
                            </h4>
                            </div>
                

                  <div>

                            <h3>
                            <strong>
                          


 
                              {/* { this.props.tailleData.tailles_reducer.recievedData  
    ?  this.props.tailleData.tailles_reducer.tailles.last_height.cm : 'Data failed'} */}
    {!this.props.tailleData.tailles_reducer.recievedData ? ' _ ' : this.props.tailleData.tailles_reducer.tailles.last_height === undefined ? " _ " : ` ${this.props.tailleData.tailles_reducer.tailles.last_height.cm} cm `} 
                            </strong>
                            </h3>
                            
                            <p>
                              
                              {/* { this.props.tailleData.tailles_reducer.recievedData  
    ?  this.props.tailleData.tailles_reducer.tailles.last_height.date : 'Data failed'} */}
                              {!this.props.tailleData.tailles_reducer.recievedData ? ' _ ' : this.props.tailleData.tailles_reducer.tailles.last_height === undefined ? " _ " : ` ${this.props.tailleData.tailles_reducer.tailles.last_height.date}  `} 

                            </p>

                        </div>
                      
    
                    </div>
                    <div className='flexedHistorique'>
                    <h5>
                        Historique :
                    </h5>
                    </div>
                    {/* { this.props.tailleData.tailles_reducer.recievedData  
    ?  this.renderList() : 'Data failed'} */}
    
                    {this.renderList()}
                    {/* <div className="ui celled list">{this.renderList()}</div> */}
                    {/* <div class="login-box-seperator" id="login-box-seperator-left"></div> */}
                    </div>
                    
                </div>
            </div>
            
          </div>

























































<div>
</div>
      </div>
      </div>
      </div>
{/* render end */}



      </>
      
    );
  }





 










}

































const mapStateToProps = (state) => {
  return {
    tailleData: state,
  };
};

const mapDispatchToProps = (dispatch, formValues, id) => {
  return {
    fetchTailleInfos: () => dispatch(fetchTailleInfos()),
    createTaille : (formValues) => dispatch(createTaille(formValues)),
    editTaille : (formValues, id) => dispatch(editTaille(formValues, id)),
    deleteTaille : (id) => dispatch(deleteTaille(id)),
  };
};

MetrixTaille = connect(
    mapStateToProps,
    mapDispatchToProps
)(MetrixTaille);

export default reduxForm({
    form: 'MetrixTailleHistoryandAdd', // a unique name for this form
    enableReinitialize: true
})(MetrixTaille);



