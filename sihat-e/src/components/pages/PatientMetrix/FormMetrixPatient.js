import React, { Component } from "react";
import { connect } from "react-redux";
import { logout, fetchTailleInfos, fetchPoidsInfos, fetchBmiInfos, fetchTensionInfos} from "../../../actions";
import {Link} from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { first } from "lodash";
import MetrixTaille from './Tailles/MetrixTaille';
import Loader from '../../../helpers/Loader';

class FormMetrixPatient extends Component {

  componentDidMount() {
    this.props.fetchTailleInfos()
    this.props.fetchPoidsInfos()
    this.props.fetchBmiInfos()
    this.props.fetchTensionInfos()


    console.log(this.props)
  }

  renderInput({handleSubmit,input,value, meta,label,placeholder,name,id,type,className,initialValues,
defaultValue,defaultChecked,checked,}) 
  
  {
    return (
      <>
        <div className="col-sm-6 col-xl-7 input-column">
          <div className="form-row form-group">
            <label className="active col-form-label d-xl-flex align-items-xl-start">
              {label}
            </label>
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
            />
          </div>
        </div>
      </>
    );
  }


  render() {
    if (!this.props.taillData && !this.props.poidsData && !this.props.bmiData && !this.props.tensionData) {
      return               <Loader />
      ;
    } else {
      return(
      <>
        <div className="d-xl-flex justify-content-xl-center align-items-xl-center">
          <div id="formCardContainer">
            <div>
              <div  className="row register-form">
                <div className="col-md-8 col-xl-10 offset-md-2 offset-xl-0">
                  <div id='metrixForm' className="custom-form" >
                    <h1 className="d-xl-flex align-items-xl-start">Mes métriques de santé.</h1>
                  </div>
                </div>
              </div>
              <div className='metrixWrapper'>
                    <Link to='/metrixTaille'>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div id='onemetric'>
                        <div>
                            <h5>
                                Taille
                            </h5>
                        </div>
                            <div className='d-flex flex-column'>
                                <p className='ml-auto'>

                                {!this.props.taillData.tailles_reducer.recievedData ? "Chargement ..." : 
                                this.props.taillData.tailles_reducer.tailles.last_height === undefined ?  " _ " :
                                `${this.props.taillData.tailles_reducer.tailles.last_height.cm} cm`}
                                
                                    
                                </p>
                                <p>
                                {!this.props.taillData.tailles_reducer.recievedData ? "Chargement ..." : 
                                this.props.taillData.tailles_reducer.tailles.last_height === undefined ?  " _ " :
                                ` ${this.props.taillData.tailles_reducer.tailles.last_height.date} `}
                                </p>
                            </div>
                    </div>
                    </Link>

                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <Link to='/metrixPoids'>

                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div id='onemetric'>
                        <div>
                            <h5>
                                Poids
                            </h5>
                        </div>
                        <div className='d-flex flex-column'>
                                <p className='ml-auto'>
                                  {/* SI LA DATA EST FETCHER ON DOIT ETRE SUR QU'ON A LES LAST RECORDS SI OUI ON AFFICHE SINON ON AFFICHE MSG AUCUN RECORD */}
                                {!this.props.poidsData.poids_reducer.dataOk ? "Chargement ..." : this.props.poidsData.poids_reducer.poids.last_weight === undefined ? " _ ": ` ${this.props.poidsData.poids_reducer.poids.last_weight.kg} kg `} 
                                    
                                </p>
                                <p>
                                    {!this.props.poidsData.poids_reducer.dataOk ? " " : 
                                    this.props.poidsData.poids_reducer.poids.last_weight === undefined ? "_": this.props.poidsData.poids_reducer.poids.last_weight.date}
                                </p>
                            </div>
                    </div>
                    </Link>

                    <div class="login-box-seperator" id="login-box-seperator-left"></div>

                    <Link to='/metrixBMI'>

    <div class="login-box-seperator" id="login-box-seperator-left"></div>
    <div id='onemetric'>
        <div>
            <h5>
                I.M.C
            </h5>
        </div>
        <div className='d-flex flex-column'>
                                <p className='ml-auto'>
                                  {/* SI LA DATA EST FETCHER ON DOIT ETRE SUR QU'ON A LES LAST RECORDS SI OUI ON AFFICHE SINON ON AFFICHE MSG AUCUN RECORD */}
                                  {console.log(this.props.bmiData)}

                                {!this.props.bmiData.bmi_reducer.myData ? "Chargement ..." : this.props.bmiData.bmi_reducer.bmi.last_BMI === undefined ? " _ " : ` ${this.props.bmiData.bmi_reducer.bmi.last_BMI.BMI}  `} 
                                    
                                </p>
                                <p>
                                    {!this.props.bmiData.bmi_reducer.myData ? " " : 
                                    this.props.bmiData.bmi_reducer.bmi.last_BMI === undefined ? "_": this.props.bmiData.bmi_reducer.bmi.last_BMI.date}
                                </p>
                            </div>
    </div>
    </Link>





                    <div class="login-box-seperator" id="login-box-seperator-left"></div>

                    <Link to='/metrixTension'>

<div class="login-box-seperator" id="login-box-seperator-left"></div>
<div id='onemetric'>
    <div>
        <h5>
            Tension
        </h5>
    </div>
    <div className='d-flex flex-column'>
            <p className='ml-auto'>
              {/* SI LA DATA EST FETCHER ON DOIT ETRE SUR QU'ON A LES LAST RECORDS SI OUI ON AFFICHE SINON ON AFFICHE MSG AUCUN RECORD */}
            {!this.props.tensionData.tension_reducer.dataOk ? "Chargement ..." : this.props.tensionData.tension_reducer.tension.last_blood_pressure === undefined ? " _ ": ` ${this.props.tensionData.tension_reducer.tension.last_blood_pressure.blood_pressure} bpm `} 
                
            </p>
            <p>
                {!this.props.tensionData.tension_reducer.dataOk ? " " : 
                this.props.tensionData.tension_reducer.tension.last_blood_pressure === undefined ? "_": this.props.tensionData.tension_reducer.tension.last_blood_pressure.date}
            </p>
        </div>
</div>
</Link>



                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div id='onemetric'>
                        <div>
                            <h5>
                                Température
                            </h5>
                        </div>

                            <div>
                                <p>
                                    177cm
                                </p>
                                <p>
                                    date
                                </p>
                            </div>
                    </div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div>
                    <div id='onemetric'>
                        <div>
                            <h5>
                                Cholesterol
                            </h5>
                        </div>

                            <div>
                                <p>
                                    177cm
                                </p>
                                <p>
                                    date
                                </p>
                            </div>
                    </div>
                    <div class="login-box-seperator" id="login-box-seperator-left"></div> 
                    
                    

                </div>
            </div>
          </div>
        </div>
      </> 
    ); }
  }
}






const mapStateToProps = (state,props) => {
  return {
    taillData: state, 
    poidsData: state,
    bmiData: state,
    tensionData: state,


  };
};

const mapDispatchToProps = (dispatch, formValues) => {
  return {
    fetchTailleInfos: () => dispatch(fetchTailleInfos()),
    fetchPoidsInfos: () => dispatch(fetchPoidsInfos()),
    fetchBmiInfos: () => dispatch(fetchBmiInfos()),
    fetchTensionInfos: () => dispatch(fetchTensionInfos()),

    


    // createAbout : (formValues) => dispatch(createAbout(formValues)),
    // editAboutInfos : (formValues) => dispatch(editAboutInfos(formValues)),

  };
};

FormMetrixPatient = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormMetrixPatient);

export default reduxForm({
    // form: 'MetrixForm', // a unique name for this form
    enableReinitialize: true
})(FormMetrixPatient);



