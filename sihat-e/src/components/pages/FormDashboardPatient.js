        import React, { Component } from 'react';
        import { connect } from 'react-redux';
        import {  logout, createAbout, fetchAboutInfos  } from '../../actions'


    //  const smya = () => {
//             return async () => {
                
//                 if(count == 0){
//                     console.log(this.props.count)
//                   const save = await this.props.fetchAboutInfos();
//                   count = 1
//                     const morasave = save;
//                     console.log(count)
//                 }else{
// console.log('hello')
//                 }
                
                
                
//             }

//  this.props.setState({
//                    data : this.props.aboutInfos,
//               first_name: this.props.aboutInfos.first_name
//           })
//                     console.log(this.props)
//                      console.log(this.props.morasave)

//                 this.props.fetchAboutInfos();
//                 this.setState({
//               first_name: this.props.aboutInfos.first_name
//         })
//     }
   
    
        class FormDashboardPatient extends Component {
            constructor(props) {
                super(props) 
                
            if(this.props.aboutInfos.id){
            localStorage.setItem('myData', JSON.stringify(this.props.aboutInfos));
            console.log(localStorage.getItem('myData'))
            } else {
               
            }
            console.log(JSON.parse(localStorage.getItem('myData')))
            }
            
        

// this.state = {
//         salam : JSON.parse(localStorage.getItem('myData'))
//   }
//   console.log(this.props.salam)


        





        
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
            first_name, last_name, adress,birth_day, bio_sex
            };
 localStorage.removeItem('myData');
        }



        render() {
            return (
            <form onSubmit={this.handleSubmit}>
                <label>first name</label>
                <input type="text" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).first_name : ''  }></input>
                <label>last name</label>



                <input type="text" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).last_name : ''  } ></input>
                <label>adresse </label>
                <input type="text" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).adress : ''  }></input>


                <div className="form-row form-group">
                    <div className="col-sm-4 col-xl-12 label-column">
                        <label className="col-form-label d-xl-flex align-items-xl-start" htmlFor="name-input-field"> 
                        <strong>Date de naissance :</strong>
                        </label>
                    </div>
                    <div className="col-md-6 col-xl-7">
                        <input id="birthDate" type="date" defaultValue={ localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')).birth_day : ''  }
                        >
                        </input>
                    </div>
                </div>

                <div className="form-row form-group">
                    <div className="col-sm-4 col-xl-7 label-column">
                        <label className="col-form-label d-xl-flex align-items-xl-start" htmlFor="pawssword-input-field">Genre :
                        </label>
                    </div>
                    <div className="custom-control custom-radio"> 

                     {JSON.parse(localStorage.getItem('myData')).bio_sex == "femme" ?<input type="radio" id="customRadio1" className="custom-control-input" name="customRadio"  defaultChecked /> : <input type="radio" id="customRadio1" className="custom-control-input" name="customRadio"   /> }
                   
                    <label className="custom-control-label" htmlFor="customRadio1">Femme</label></div>

                <div className="custom-control custom-radio">

                     {JSON.parse(localStorage.getItem('myData')).bio_sex == "homme" ?<input type="radio" id="customRadio2" className="custom-control-input" name="customRadio"  defaultChecked  /> : <input type="radio" id="customRadio2" className="custom-control-input" name="customRadio" /> }
                   
                <label className="custom-control-label" htmlFor="customRadio2">Homme</label></div>
                
                </div>
                <button  id="btnFormDashboard" className="btn btn-light d-xl-flex align-items-xl-start submit-button" type="submit" >Update</button>
            </form>
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






























