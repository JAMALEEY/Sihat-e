import React, { Component } from "react";
import { connect } from "react-redux";
import { logout, createAbout, fetchAboutInfos } from "../../actions";
import { input, reduxForm } from "redux-form";

class FormDashboardPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localStorage: null,
      infos: null,
      first_name: "",
      last_name: "",
      adress: "",
      birth_day: "",
      bio_sex: "",
    };
    console.log("state Constructor : ");
    console.log(this.state);
  }
  componentDidMount() {
    this.handleFetch();
    console.log("state DidMount : ");
    console.log(this.state);
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return this.state.value !== nextState.value;
  //   }

  //   componentWillMount() {
  //     console.log("Component will mount!");
  //     console.log(this.state);
  //   }
  //   componentDidMount() {
  //     console.log("Component did mount!");
  //     this.props.fetchAboutInfos();
  //     console.log(this.props.fetchAboutInfos);
  //     if (this.props.aboutInfos.id) {
  //       localStorage.setItem("myData", JSON.stringify(this.props.aboutInfos));
  //       console.log(localStorage.getItem("myData"));
  //       this.setState({
  //         contructor: true,
  //         aboutinfos: JSON.parse(localStorage.getItem("myData")),
  //       });
  //       console.log(this.state);
  //     } else {
  //       this.props.fetchAboutInfos();
  //       localStorage.setItem("myData", JSON.stringify(this.props.aboutInfos));
  //       console.log(localStorage.getItem("myData"));
  //       this.setState({
  //         contructor: true,
  //         aboutinfos: JSON.parse(localStorage.getItem("myData")),
  //       });
  //       console.log(this.state);
  //     }
  //     console.log(this.state);
  //   }

  handleFetch = () => {
    const token = localStorage.getItem("TOKEN");
    fetch("http://127.0.0.1:8000/api/patient/fetch", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((aboutInfos) => {
        this.setState({
          infos: aboutInfos.data,
          first_name: aboutInfos.data.first_name,
          last_name: aboutInfos.data.last_name,
          adress: aboutInfos.data.adress,
          birth_day: aboutInfos.data.birth_day,
          bio_sex: aboutInfos.data.bio_sex,
        });
        localStorage.setItem("myData", JSON.stringify(this.state.infos));
        this.setState({
          localStorage: true,
        });
        console.log("State Handlefetch");
        console.log(this.state);
      })

      .catch((err) => {
        this.setState({
          infos: "error",
        });
        console.error(err);
      });
  };

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(this.state.infos !== nextState.infos);
  //     return this.state.infos !== nextState.infos;
  //   }
  //   componentWillUpdate(nextProps, nextState) {
  //     console.log(this.state);
  //   }
  //   componentDidUpdate(prevProps, prevState) {}

  //   state = {
  //     first_name: this.props.aboutInfos.first_name,
  //     last_name: this.props.aboutInfos.last_name,
  //     adress: this.props.aboutInfos.adress,
  //     birth_day: this.props.aboutInfos.birth_day,
  //     bio_sex: this.props.aboutInfos.bio_sex,
  //   };

  handleChange = this.handleChange.bind(this);
  // handleSubmit = this.handleSubmit.bind(this);

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
    defaultValue,
    defaultChecked,
    checked,
  }) {
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
              defaultValue={defaultValue}
              // value={input.value}
              checked={checked}
              name={name}
              type={type}
              id={id}
            />
          </div>
        </div>
      </>
    );
  }

  handleChange(e) {
    const { target } = this.event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      first_name: event.target.elements.first_name.value,
      last_name: event.target.elements.last_name.value,
      adress: event.target.elements.adress.value,
      birth_day: event.target.birth_day.value,
      bio_sex: event.target.bio_sex.value,
    };
    console.log(JSON.stringify(data));

    const token = localStorage.getItem("TOKEN");
    return fetch("http://127.0.0.1:8000/api/patient/create", {
      method: "POST",

      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response);
          // window.location.reload();
          return response;
        } else {
          console.log("Somthing happened wrong");
        }
      })
      .catch((err) => err);
  };

  render() {
    if (this.state.infos === null) {
      return <h1>Hello</h1>;
    } else {
      return (
        <>
          <div className="d-xl-flex justify-content-xl-center align-items-xl-center">
            <div id="formCardContainer">
              <div>
                {/* Start Form */}
                <div className="row register-form">
                  <div className="col-md-8 col-xl-10 offset-md-2 offset-xl-0">
                    <form className="custom-form" onSubmit={this.handleSubmit}>
                      <h1 className="d-xl-flex align-items-xl-start">
                        A propos
                      </h1>

                      <div className="form-row form-group">
                        <div className="col-sm-6 col-xl-7 input-column">
                          <input
                            className="form-control-plaintext"
                            name="first_name"
                            component={this.renderInput}
                            label="Prénom :"
                            placeholder="Votre prénom"
                            type="text"
                            defaultValue={this.state.infos.first_name}
                          />
                        </div>
                      </div>

                      <div className="form-row form-group">
                        <div className="col-sm-6 col-xl-7 input-column">
                          <input
                            placeholder="Votre nom"
                            name="last_name"
                            label="Nom:"
                            component={this.renderInput}
                            className="form-control"
                            type="text"
                            defaultValue={this.state.infos.first_name}
                          ></input>
                        </div>
                      </div>

                      {/* date naissance */}
                      <div className="form-row form-group">
                        <div className="col-md-6 col-xl-7">
                          <input
                            label="Date de naissance:"
                            component={this.renderInput}
                            className="form-control date"
                            id="birthDate"
                            name="birth_day"
                            type="date"
                            defaultValue={this.state.infos.first_name}
                          ></input>
                        </div>
                      </div>
                      {/* end date naissance */}

                      {/* adresse */}

                      <div className="form-row form-group">
                        <div className="col-sm-6 col-xl-7 input-column">
                          <input
                            placeholder="Votre adresse"
                            name="adress"
                            label="Adresse"
                            component={this.renderInput}
                            className="form-control"
                            type="text"
                          ></input>
                        </div>
                      </div>

                      {/* End adresse */}

                      {/* Start Radios */}
                      <div className="form-row form-group">
                        <div className="col-sm-6 input-column">
                          <div className="custom-control custom-radio">
                            {/* <div className="custom-control custom-radio">
                  {localStorage.getItem('myData') && JSON.parse(localStorage.getItem('myData')).bio_sex == "femme" ? 
                  
                  <input component={this.renderInput} type="radio"  className="custom-control-input" name="customRadio" value='femme'  defaultChecked /> 
                  : <input component={this.renderInput} type="radio"  className="custom-control-input" name="customRadio" value='femme' /> }
  
                  <label className="custom-control-label" htmlFor="customRadio3"
                  > 
                      Femme
                  </label>
              </div>
              
              <div className="custom-control custom-radio">
                  {localStorage.getItem('myData') && JSON.parse(localStorage.getItem('myData')).bio_sex == "homme" ? <input component={this.renderInput} type="radio" className="custom-control-input" name="customRadio" value='homme' defaultChecked  /> : <input component={this.renderInput} type="radio"  className="custom-control-input" name="customRadio" value='homme' /> }
  
                  <label className="custom-control-label" htmlFor="customRadio2">
                      Homme
                  </label>
              </div> */}
                            <div className="radioformbox">
                              <label>bio_sex :</label>

                              <div className="leschoixradio">
                                <label>
                                  {" "}
                                  Femme
                                  {this.state.infos.first_name ? (
                                    <input
                                      name="bio_sex"
                                      component={this.renderInput}
                                      type="radio"
                                      value="femme"
                                      checked={true}
                                    />
                                  ) : (
                                    <input
                                      name="bio_sex"
                                      component={this.renderInput}
                                      type="radio"
                                      value="femme"
                                    />
                                  )}
                                </label>

                                <label className="hommechoice">
                                  {" "}
                                  Homme
                                  {this.state.infos.first_name ? (
                                    <input
                                      id="radiocheckcheck"
                                      name="bio_sex"
                                      component={this.renderInput}
                                      type="radio"
                                      value="homme"
                                      checked={true}
                                    />
                                  ) : (
                                    <input
                                      name="bio_sex"
                                      component={this.renderInput}
                                      type="radio"
                                      value="homme"
                                    />
                                  )}
                                </label>
                              </div>
                              <button
                                id="btnFormDashboard"
                                className="btn btn-light d-xl-flex align-items-xl-start submit-button"
                                type="submit"
                              >
                                Enregistrer
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
              }}
            </div>
          </div>
        </>
      );
    }
  }
}

FormDashboardPatient = reduxForm({
  form: "aboutInfosForm", // a unique identifier for this form
})(FormDashboardPatient);

// You have to connect() to any reducers that you wish to connect to yourself

FormDashboardPatient = connect(
  (state) => ({
    // pull initial values from account reducer
    aboutInfos: state.aboutInfos,
    initialValues: state.infos,
  }),

  { fetchAboutInfos, createAbout }
)(FormDashboardPatient);

export default FormDashboardPatient;

// const mapStateToProps = state => {
// return {
// aboutInfos: state.aboutInfos,
// logout: state.logout,

//     initialValues: {
//         first_name:'rrr'
//     }

// };
// };

// export default reduxForm({ form: 'aboutInfosForm'})(connect(mapStateToProps, {fetchAboutInfos, createAbout})(FormDashboardPatient))
