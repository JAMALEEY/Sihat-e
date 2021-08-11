import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  logout, createAbout, fetchAboutInfos  } from '../../actions'


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
    handleSubmit = this.handleSubmit.bind(this);
    


    handleChange(e) {
        const { target}  = this.event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name }  = target;

        this.setState({
        [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { first_name, last_name, adress,birth_day, bio_sex  } = this.state;
        const body = {
        first_name, last_name, adress, birth_day, bio_sex
        };
        this.props.createAbout(this.state)
        localStorage.removeItem('myData');

    }



render() {
    return (
        <>
    <div className="d-xl-flex justify-content-xl-center align-items-xl-center">
    <div id="formCardContainer">
        <div>
                        {/* Start Form */}
        <div className="row register-form">
            <div className="col-md-8 col-xl-10 offset-md-2 offset-xl-0">
            <form className="custom-form" onSubmit={this.handleSubmit}>
    <h1 className="d-xl-flex align-items-xl-start">A propos</h1>

        <div className="form-row form-group">
            <div className="col-sm-4 col-xl-12 label-column">
                <label className="col-form-label d-xl-flex align-items-xl-start" htmlFor="name-input-field">
                    <strong>Nom :</strong>
                </label>
            </div>
            <div className="col-sm-6 col-xl-7 input-column">

                <input className="form-control" type="text" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).first_name : ''  }
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
                <input  className="form-control" type="text" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).last_name : ''  } 
                >
                </input> 
            </div>  
        </div>


        {/* date naissance */}
        <div className="form-row form-group">
            <div className="col-sm-4 col-xl-12 label-column">
                <label className="col-form-label d-xl-flex align-items-xl-start" htmlFor="name-input-field"> 
                <strong>Date de naissance :</strong></label>
            </div>

            <div className="col-md-6 col-xl-7">
                <input className="form-control date" id="birthDate" type="date" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).birth_day : ''  }
                >
                </input>
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
                <input className="form-control" type="text" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).adress : ''  }>
                </input> 
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
                <input type="radio" id="customRadio1" className="custom-control-input" name="customRadio"  defaultChecked /> 
                : <input type="radio" id="customRadio1" className="custom-control-input" name="customRadio"/> }

                <label className="custom-control-label" htmlFor="customRadio1"
                >
                    Femme
                </label>
            </div>
            
            <div className="custom-control custom-radio">
                {localStorage.getItem('myData') && JSON.parse(localStorage.getItem('myData')).bio_sex == "homme" ?<input type="radio" id="customRadio2" className="custom-control-input" name="customRadio"  defaultChecked  /> : <input type="radio" id="customRadio2" className="custom-control-input" name="customRadio" /> }

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



export default connect(mapStateToProps, {fetchAboutInfos})(FormDashboardPatient);






























