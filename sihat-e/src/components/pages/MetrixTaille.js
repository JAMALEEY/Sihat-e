import React, { Component } from "react";
import { connect } from "react-redux";
import { logout, createTaille, fetchTailleInfos, editTaille, deleteTaille } from "../../actions";
import {Link} from 'react-router-dom';
import { Field, formValues, reduxForm } from "redux-form";
import { first } from "lodash";
import Modal from './Modal';
import ModalUpdate from './ModalUpdate';
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
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  showModalCreat = () => {
    this.setState({ show2: true });
  };

  hideModalCreat = () => {
    this.setState({ show2: false });
  };

  componentDidMount() {
   this.props.fetchTailleInfos();
   console.log(this.props)
  }


  onSubmit = (formValues) => {
    this.props.createTaille(formValues);}
 

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
    if (this.props.tailleData.tailles_reducer.recievedData) {
      // const id = this.props.tailleData.tailles_reducer.tailles.historique.id;
    return this.props.tailleData.tailles_reducer.tailles.historique
    .map(thetailleData => {
      return (
        <div key={thetailleData.id} id={thetailleData.id}>

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
                            <Modal submit={this.props.handleSubmit(this.onSubmit)} modalTitle={this.state.modalTitle} show={this.state.show} handleClose={this.hideModalCreat}>
                              {/* children */}
          <strong><p>Mesures :</p></strong>
                      <Field
                          className="form-control"
                          name="MetrixTaille"
                          component={this.renderInput}
                          label="Modifier votre taille :"
                          placeholder="Votre taille"
                          type="text"
                          span='Cm'
                        /> 
                        {/* <strong><p>Date de cette Mesure :</p></strong> */}
        </Modal>
          {/* {this.upd = (formValues) => {this.props.editTaille(thetailleData.id, formValues)}} */}
        {/* Creat */}
        <ModalUpdate  id={this.state.id} date={this.state.date} mesures={this.state.mesures} modalTitle={this.state.modalTitleEdit} show2={this.state.show2} handleClose={this.hideModal}>
        
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
        </ModalUpdate>
                        </div>

                            <div>

                            <div className='dropdown'>
                            <button role="button" type="button" class="btn" data-toggle="dropdown">
                            <i className="far fa-edit"></i> 
                            </button>
                            
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Modal title="Modifier"
        // content={this.renderContent()}
        // actions={this.renderActions()}
        // onDismiss={() => history.push('/')}
      />
      { this.del = () => this.props.deleteTaille(thetailleData.id)} 
      {/* {this.supp  = () => {  this.props.deleteTaille(this.props.thetailleData.id)}} */}
    <Link class="dropdown-item" onClick={this.showModal} >Edit</Link>
    <Link class="dropdown-item" onClick={this.del}>Delete</Link>

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
    ( <h2>Loading</h2> ) 
    : 
    this.props.tailleData.tailles_reducer.error 
    ? 
    ( <h2>{this.props.tailleData.tailles_reducer.error}</h2> )
    : 
    (


      
      <>
        <div id="modal" className="d-xl-flex justify-content-xl-center align-items-xl-center">
          <div id="formCardContainer">
            <div>
              <div  className="row register-form">
                <div className="col-md-8 col-xl-10 offset-md-2 offset-xl-0">
                  <form id='metrixForm' className="custom-form" method='post' >
                  

                    <div className="d-xl-flex align-items-xl-start" >
                      <Link to='/metrix/form'>
                      <i class="fas fa-angle-left fa-2x"></i>
                      </Link>


                                  <h5 className="retourMetrix">Taille.
                                    </h5>
                                  </div>

                      {/* End Radios */}
                  </form>
                </div>

              </div>
              {/* End Form */}
              <div className='metrixWrapper'>
                
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
                              { this.props.tailleData.tailles_reducer.recievedData  
    ?  this.props.tailleData.tailles_reducer.tailles.last_height.cm : 'Data failed'}
                                Cm
                            </strong>
                            </h3>
                            
                            <p>
                              
                              { this.props.tailleData.tailles_reducer.recievedData  
    ?  this.props.tailleData.tailles_reducer.tailles.last_height.date : 'Data failed'}
                              
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



