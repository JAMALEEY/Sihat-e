        import React, { Component } from 'react';

        class FormDashboardPatient extends Component {
            componentDidMount(){
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
            first_name, last_name, adress,birth_day, bio_sex
            };
            const json = JSON.stringify(body);
            console.log(json);

        }

        render() {
            return (
            <form onSubmit={this.handleSubmit}>
                <label>first name</label>
                <input type="text" defaultValue={this.state.first_name}></input>
                <label>last name</label>
                <input type="text" defaultValue={this.state.last_name}></input>
                <label>adresse </label>
                <input type="text" defaultValue={this.state.adress}></input>
                <label>birthday</label>
                <input type="text" defaultValue={this.state.birth_day}></input>
                <label>birthday</label>
                <input type="text" defaultValue={this.state.bio_sex}></input>
                <div className="col-sm-4 col-xl-7 label-column"><label className="col-form-label d-xl-flex align-items-xl-start" htmlFor="pawssword-input-field">Genre :</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio1" className="custom-control-input" name="customRadio" defaultChecked />
                <label className="custom-control-label" htmlFor="customRadio1">Femme</label></div>

                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio2" className="custom-control-input" name="customRadio" />
                <label className="custom-control-label" htmlFor="customRadio2">Homme</label></div>
                

                <button type="submit" >Update</button>
            </form>
            );
        }
        }

        export default FormDashboardPatient;



























