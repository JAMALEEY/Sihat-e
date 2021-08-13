import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  logout, createAbout, fetchAboutInfos  } from '../../actions';
import { Field, reduxForm } from 'redux-form';


    class FormDashboardPatient extends Component { 
        constructor(props) {
            super(props) 
            this.props.fetchAboutInfos();
            if(this.props.aboutInfos.id){
            localStorage.setItem('myData', JSON.stringify(this.props.aboutInfos));
            console.log(localStorage.getItem('myData'))
            } else {
                
            }
        }
        









    state = {
    first_name: this.props.item.first_name,
    last_name: this.props.item.last_name,
    adress: this.props.item.adress,
    birth_day: this.props.item.birth_day,
    bio_sex: this.props.item.bio_sex
    };

    handleChange = this.handleChange.bind(this);
    // handleSubmit = this.handleSubmit.bind(this);
    

    renderInput ({handleSubmit, input, value, meta, label, placeholder, name, id, type, className, initialValues, defaultValue, defaultChecked, checked}) {
        return (
            <>
                <div className="col-sm-6 col-xl-7 input-column">
                    <div className="form-row form-group">
                    <label className="active col-form-label d-xl-flex align-items-xl-start">{label}</label>
                    <input {...input}
                    className={className}
                    autoComplete='none'
                    placeholder={placeholder} 
                    onChange={input.onChange}
                    defaultValue={defaultValue}
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






    handleChange(e) {
        const { target}  = this.event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name }  = target;

        this.setState({
        [name]: value
        });
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);

        const { first_name, last_name, adress,birth_day, bio_sex  } = this.state;
        const body = {
        first_name, last_name, adress, birth_day, bio_sex
        };

      };




render() {
    return (
        <>
    <div className="d-xl-flex justify-content-xl-center align-items-xl-center">
    <div id="formCardContainer">
        <div>
                        {/* Start Form */}
        <div className="row register-form">
            <div className="col-md-8 col-xl-10 offset-md-2 offset-xl-0">
            <form className="custom-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
    <h1 className="d-xl-flex align-items-xl-start">A propos</h1>

        <div className="form-row form-group">
            <div className="col-sm-6 col-xl-7 input-column">
                <Field className="form-control-plaintext" name="first_name" component={this.renderInput} label="Prénom :" placeholder="Votre prénom" type='text' defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).first_name : ''  }  
                />
            </div> 
        </div>





        <div className="form-row form-group">

            <div className="col-sm-6 col-xl-7 input-column">
                <Field placeholder="Votre nom" name="last_name" label="Nom:" component={this.renderInput} className="form-control" type="text" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).last_name : ''  } 
                >
                </Field> 
            </div>  
        </div>


        {/* date naissance */}
        <div className="form-row form-group">

            <div className="col-md-6 col-xl-7">
                <Field label="Date de naissance:" component={this.renderInput} className="form-control date" id="birthDate" type="date" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).birth_day : ''  }
                >
                </Field>
            </div>
        </div>
        {/* end date naissance */}

        {/* adresse */}
        
        <div className="form-row form-group">

            <div className="col-sm-6 col-xl-7 input-column">
                <Field  placeholder="Votre adresse" name="adress" label="Adresse" component={this.renderInput} className="form-control" type="text" >
                </Field> 
            </div>  
        </div>
        
        {/* End adresse */}
        
                    {/* Start Radios */}
        <div className="form-row form-group">
        <div className="col-sm-6 input-column">
        <div className="custom-control custom-radio">
            {/* <div className="custom-control custom-radio">
                {localStorage.getItem('myData') && JSON.parse(localStorage.getItem('myData')).bio_sex == "femme" ? 
                
                <Field component={this.renderInput} type="radio"  className="custom-control-input" name="customRadio" value='femme'  defaultChecked /> 
                : <Field component={this.renderInput} type="radio"  className="custom-control-input" name="customRadio" value='femme' /> }

                <label className="custom-control-label" htmlFor="customRadio3"
                > 
                    Femme
                </label>
            </div>
            
            <div className="custom-control custom-radio">
                {localStorage.getItem('myData') && JSON.parse(localStorage.getItem('myData')).bio_sex == "homme" ? <Field component={this.renderInput} type="radio" className="custom-control-input" name="customRadio" value='homme' defaultChecked  /> : <Field component={this.renderInput} type="radio"  className="custom-control-input" name="customRadio" value='homme' /> }

                <label className="custom-control-label" htmlFor="customRadio2">
                    Homme
                </label>
            </div> */}
<div className="radioformbox">
<label>Genre :</label>

    <div className='leschoixradio'>
            
    <label> Femme
        {localStorage.getItem('myData') && JSON.parse(localStorage.getItem('myData')).bio_sex ==    "femme" ? 
            <Field name="Genre" component={this.renderInput} type="radio" value="femme" checked={true} /> : 
            <Field name="Genre" component={this.renderInput} type="radio" value="femme"  /> 
        }
    </label> 

    <label className="hommechoice"> Homme
        {localStorage.getItem('myData') && JSON.parse(localStorage.getItem('myData')).bio_sex ==    "homme" ? 
            <Field id="radiocheckcheck" name="Genre" component={this.renderInput} type="radio"  value='homme' checked={true} /> : 
            <Field name="Genre" component={this.renderInput} type="radio" value='homme' /> 
        }
    </label>
        
    </div>
    <button id="btnFormDashboard" className="btn btn-light d-xl-flex align-items-xl-start submit-button" type="submit"> Editer
    </button>
</div>
        
</div>

</div>
{/* End Radios */}


            

        </div>

            </form>
            </div>
        </div>
        {/* End Form */}
        
        </div>
    </div>
    </div>



        
        </>
    );
}
}

FormDashboardPatient = reduxForm({
    form: 'HGDFGHFD', // a unique identifier for this form
    enableReinitialize: true
  })(FormDashboardPatient)
  
  // You have to connect() to any reducers that you wish to connect to yourself
  FormDashboardPatient = connect(
    state => ({
       // pull initial values from account reducer
      aboutInfos: state.aboutInfos,
      initialValues : JSON.parse(localStorage.getItem('myData'))
    }),
    
    {fetchAboutInfos, createAbout}

  )(FormDashboardPatient)
  
  export default FormDashboardPatient






















