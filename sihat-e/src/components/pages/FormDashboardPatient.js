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
    

    renderInput ({handleSubmit, input, value, meta, label, placeholder, name, id, type, className, initialValues}) {
        return (
            <>
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






    handleChange(e) {
        const { target}  = this.event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name }  = target;

        this.setState({
        [name]: value
        });
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);

        const { first_name, last_name, adress,birth_day, bio_sex  } = this.state;
        const body = {
        first_name, last_name, adress, birth_day, bio_sex
        };

        this.props.createAbout(formValues)
        localStorage.removeItem('myData');
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
            <div className="col-sm-4 col-xl-12 label-column">
                <label className="col-form-label d-xl-flex align-items-xl-start" htmlFor="name-input-field">
                    <strong>Nom :</strong>
                </label>
            </div>
            <div className="col-sm-6 col-xl-7 input-column">
                <Field className="form-control-plaintext" name="first_name" component={this.renderInput} label="Prénom :" placeholder="Votre prénom" type='text'  />
                
                <Field className="form-control" type="text" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).first_name : ''  }
                />
            </div> 
        </div>





        <div className="form-row form-group">
            <div className="col-sm-4 col-xl-12 label-column">
                <label className="col-form-label d-xl-flex align-items-xl-start" htmlFor="name-input-field">
                    <strong>Prénom :</strong>
                </label>
            </div>

            <div className="col-sm-6 col-xl-7 input-column">
                <Field  className="form-control" type="text" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).last_name : ''  } 
                >
                </Field> 
            </div>  
        </div>


        {/* date naissance */}
        <div className="form-row form-group">
            <div className="col-sm-4 col-xl-12 label-column">
                <label className="col-form-label d-xl-flex align-items-xl-start" htmlFor="name-input-field"> 
                <strong>Date de naissance :</strong></label>
            </div>

            <div className="col-md-6 col-xl-7">
                <Field className="form-control date" id="birthDate" type="date" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).birth_day : ''  }
                >
                </Field>
            </div>
        </div>
        {/* end date naissance */}

        {/* adresse */}
        
        <div className="form-row form-group">
            <div className="col-sm-4 col-xl-12 label-column">
                <label className="col-form-label d-xl-flex align-items-xl-start" htmlFor="name-input-field">
                    <strong>Adresse :</strong>
                </label>
            </div>

            <div className="col-sm-6 col-xl-7 input-column">
                <Field className="form-control" type="text" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).adress : ''  }>
                </Field> 
            </div>  
        </div>
        {/* End adresse */}

        <div className="form-row form-group">
        <div className="col-sm-4 col-xl-7 label-column">
        <label className="col-form-label d-xl-flex align-items-xl-start" htmlFor="pawssword-input-field">Genre :
        </label>
        </div>
        <div className="col-sm-6 input-column">
                    {/* Start Radios */}
        <div className="custom-control custom-radio">
            
            <div className="custom-control custom-radio">
                {localStorage.getItem('myData') && JSON.parse(localStorage.getItem('myData')).bio_sex == "femme" ? 
                <Field type="radio" id="customRadio1" className="custom-control-input" name="customRadio"  defaultChecked /> 
                : <Field type="radio" id="customRadio1" className="custom-control-input" name="customRadio"/> }

                <label className="custom-control-label" htmlFor="customRadio1"
                >
                    Femme
                </label>
            </div>
            
            <div className="custom-control custom-radio">
                {localStorage.getItem('myData') && JSON.parse(localStorage.getItem('myData')).bio_sex == "homme" ?<Field type="radio" id="customRadio2" className="custom-control-input" name="customRadio"  defaultChecked  /> : <Field type="radio" id="customRadio2" className="custom-control-input" name="customRadio" /> }

                <label className="custom-control-label" htmlFor="customRadio2">
                    Homme
                </label>
            </div>
        
</div>
{/* End Radios */}
        </div>



            

        </div>
            <button id="btnFormDashboard" className="btn btn-light d-xl-flex align-items-xl-start submit-button" type="submit">Enregistrer
            </button>
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
const mapStateToProps = state => {
return {
aboutInfos: state.aboutInfos,
logout: state.logout
};
};


export default reduxForm({ form: 'aboutInfosForm'})(connect(mapStateToProps, {fetchAboutInfos, createAbout})(FormDashboardPatient))





























