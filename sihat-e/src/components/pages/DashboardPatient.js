import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {  logout, createAbout, fetchAboutInfos  } from '../../actions'
import {Field, Form, formValueSelector, reduxForm, touch} from 'redux-form';
import FormDashboardPatient from "./FormDashboardPatient";

    class DashboardPatient extends Component {
        componentDidMount(){
          this.props.fetchAboutInfos();
        }
        state = {
    name: 'React',
    infos: [
    { uId: 1, first_name: 'JAMAL EDD1441INE', last_name: 'YASSIR', adress: 'CASA', birth_day: '15/11/1997', bio_sex: ''},
    
    ]
  };

  render() {
    return (
      <div>
        {this.state.infos.map(info => <FormDashboardPatient key={info.uId} item={info} data={this.props.location.data} />)}
      </div>
    );
  }
}

    const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};



    export default connect(mapStateToProps, {fetchAboutInfos})(DashboardPatient);



















































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
        //                 <input {...input}
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
