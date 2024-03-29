import React, { Component } from "react";
import { connect } from "react-redux";
import {
  logout,
  createPoids,
  fetchPoidsInfos,
  editPoids,
  deletePoids,
  fetchAboutInfos,

} from "../../../../actions";
import { Link } from "react-router-dom";
import { Field, formValues, reduxForm } from "redux-form";
import { first } from "lodash";
import Modal from "../../Modals/Modal";
import ModalUpdate from "../../Modals/ModalUpdate";
import Loader from "../../../../helpers/Loader";
class MetrixPoids extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      modalTitleEdit: "Modification de Poids",
      modalTitle: "Ajouter votre Poids",
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
    this.props.fetchPoidsInfos();
    this.props.fetchAboutInfos();

    console.log(this.props);
  }

  creatPoids = (formValues) => {
    this.props.createPoids(formValues);
  };

  editPoids = (id, formValues) => {
    this.props.editPoids(formValues);
  };
  patientDashboarLogout = () => {
    this.props.logout();
  };

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
    span,
  }) {
    return (
      <>
        <div className="col-sm-6 col-xl-7 input-column">
          <div className="form-row form-group">
            <label className="active col-form-label d-xl-flex align-items-xl-start">
              {label}
            </label>
            <div className="renderinputFlexing">
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
              />{" "}
              <span>{span}</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  renderList() {
    if (!this.props.poidsData.poids_reducer.poids.historique) {
      <Loader />;
    } else if (this.props.poidsData.poids_reducer.poids.historique) {
      // const id = this.props.PoidsData.tailles_reducer.tailles.historique.id;
      return this.props.poidsData.poids_reducer.poids.historique.map(
        (thepoidsData) => {
          return (
            <div key={thepoidsData.id}>
              <div
                class="login-box-seperator"
                id="login-box-seperator-left"
              ></div>
              <div id="taillemetricyourmetric">
                <div>
                  <p>
                    <strong>Mon poids est de : {thepoidsData.kg} Kg</strong>
                  </p>
                  <strong>
                    <p>au : {thepoidsData.date}</p>
                  </strong>

                  {/* {this.upd = (formValues) => {this.props.editTaille(thepoidsData.id, formValues)}} */}
                  {/* Updtae */}
                  {
                    (this.editPoids = (formValues) =>
                      this.props.editPoids(thepoidsData.id, formValues))
                  }

                  <ModalUpdate
                    edit={this.props.handleSubmit(this.editPoids)}
                    id={this.state.id}
                    date={this.state.date}
                    mesures={this.state.mesures}
                    modalTitle={this.state.modalTitleEdit}
                    show2={this.state.show2}
                    handleClose={this.hideModal}
                  >
                    {/* children */}
                    <strong>
                      <p>Poids :</p>
                    </strong>
                    <Field
                      className="form-control"
                      name="kg"
                      component={this.renderInput}
                      label="Modifier votre poids :"
                      placeholder="Votre poids"
                      type="text"
                      span="kg"
                    />
                    Ce poids date de: {thepoidsData.date}
                  </ModalUpdate>
                </div>

                <div>
                  <div className="dropdown">
                    <button
                      role="button"
                      type="button"
                      class="btn"
                      data-toggle="dropdown"
                    >
                      <i className="far fa-edit"></i>
                    </button>

                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {
                        (this.del = () =>
                          this.props.deletePoids(thepoidsData.id))
                      }
                      <Link class="dropdown-item" onClick={this.showModal}>
                        Modifier
                      </Link>
                      <Link class="dropdown-item" onClick={this.del}>
                        Supprimer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      );
    } else {
    }
  }

  render() {
    return this.props.poidsData.poids_reducer.loading ? (
      <Loader />
    ) : this.props.poidsData.poids_reducer.error ? (
      <h2>{this.props.poidsData.poids_reducer.error}</h2>
    ) : (
      <>
        {/* HERE I RENDER THE SIDEBAR/ NAVBAR ... */}
        <div>
          <div className="row" id="navRow">
            <div
              className="col-md-6 col-xl-2 offset-xl-0"
              id="leftMenuContainer"
            >
              <div id="logoNavContainer">
                <div
                  className="d-flex d-xl-flex flex-row justify-content-between align-items-center justify-content-xl-center align-items-xl-center"
                  id="headingNavContainer"
                >
                  <div
                    className="d-flex d-xl-flex justify-content-xl-center align-items-xl-center"
                    id="logoDashboard"
                  >
                    <img src="../../../assets/img/Sicon.png" />
                  </div>
                  <h1>
                    MON COMPTE
                    <span>
                      <br />
                      <strong>ACCUEIL</strong>
                      <br />
                      <br />
                      <br />
                    </span>
                  </h1>
                </div>
              </div>
              <div>
                {/* Start: Sidebar */}
                <div id="sidebar-main" className="sidebar sidebar-default">
                  <div className="sidebar-category sidebar-default">
                    <div className="category-title"></div>
                    <div className="category-content">
                      <ul id="fruits-nav" className="nav flex-column">
                        <li className="nav-item1">
                          <Link to="/dashboardPatient" className="nav-link ">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="active fa fa-user-circle-o fa-2x d-xl-flex align-items-xl-center "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebar d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                A propos.
                              </h5>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item2 ">
                          <Link to="/ContactInformation" className="nav-link ">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-vcard d-xl-flex align-items-xl-center d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Informations de contact.
                              </h5>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item3">
                          <Link to="/metrix" className="nav-link active">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-bar-chart-o d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Métriques de santé.
                              </h5>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item4">
                          <Link to="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-heartbeat d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Symptomes.
                              </h5>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item5">
                          <Link to="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-file-powerpoint-o d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Ordonnances.
                              </h5>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item6">
                          <Link to="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-leaf d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Médicaments.
                              </h5>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item7">
                          <Link to="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-low-vision d-xl-flex align-items-xl-center  fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Allergies.
                              </h5>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item8">
                          <Link to="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-stethoscope d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Traitement / procédures.
                              </h5>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item9">
                          <Link to="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-user-md d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Vaccinations.
                              </h5>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item10">
                          <Link to="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-flask d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Tests de laboratoire.
                              </h5>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item11">
                          <Link to="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-grav d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Mode de vie.
                              </h5>
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item12">
                          <Link to="#" className="nav-link">
                            <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
                              <i
                                className="noactive fa fa-life-saver d-xl-flex align-items-xl-center fa-2x "
                                aria-hidden="true"
                              />
                              <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                Assurance.
                              </h5>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End: Sidebar */}
              </div>
            </div>
            <div className="col-md-6 col-xl-10 offset-xl-0" id="rightNav">
              <div
                className="d-xl-flex justify-content-xl-end align-items-xl-center"
                id="rightNavContainer"
              >
                <div
                  className="d-xl-flex justify-content-xl-end align-items-xl-center"
                  id="rightNavContainer2"
                >
                  <nav className="navbar navbar-light navbar-expand  topbar static-top">
                    <div className="container-fluid">
                      <ul className="navbar-nav flex-nowrap ml-auto">
                        <li className="nav-item dropdown d-sm-none no-arrow">
                          <a
                            aria-expanded="false"
                            data-toggle="dropdown"
                            className="dropdown-toggle nav-link"
                            href="#"
                          >
                            <i className="fas fa-search" />{" "}
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
                            aria-labelledby="searchDropdown"
                          >
                            <form className="form-inline mr-auto navbar-search w-100">
                              <div className="input-group">
                                <Link
                                  type="text"
                                  className="bg-light form-control border-0 small"
                                  placeholder="Search for ..."
                                />
                                <div className="input-group-append">
                                  <button
                                    className="btn btn-primary py-0"
                                    type="button"
                                  >
                                    <i className="fas fa-search" />
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="nav-item dropdown no-arrow mx-1">
                          <div className="nav-item dropdown no-arrow">
                            <a
                              aria-expanded="false"
                              data-toggle="dropdown"
                              className="dropdown-toggle nav-link"
                              href="#"
                            >
                              <span className="badge badge-danger badge-counter">
                                3+
                              </span>
                              <i className="fas fa-bell fa-fw" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-list animated--grow-in">
                              <h6 className="dropdown-header">alerts center</h6>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="mr-3">
                                  <div className="bg-primary icon-circle">
                                    <i className="fas fa-file-alt text-white" />
                                  </div>
                                </div>
                                <div>
                                  <span className="small text-gray-500">
                                    December 12, 2021
                                  </span>
                                  <p>
                                    Votre rapport mensuel de santé est prêt à
                                    être téléchargé !
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="mr-3">
                                  <div className="bg-success icon-circle">
                                    <i className="fas fa-donate text-white" />
                                  </div>
                                </div>
                                <div>
                                  <span className="small text-gray-500">
                                    December 7, 2021
                                  </span>
                                  <p>
                                    Docteur BENGHANEM a consulté votre dossier
                                    médical.
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="mr-3">
                                  <div className="bg-warning icon-circle">
                                    <i className="fas fa-exclamation-triangle text-white" />
                                  </div>
                                </div>
                                <div>
                                  <span className="small text-gray-500">
                                    December 2, 2021
                                  </span>
                                  <p>Votre profil est désormais à jour.</p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item text-center small text-gray-500"
                                href="#"
                              >
                                Show All Alerts
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item dropdown no-arrow mx-1">
                          <div className="nav-item dropdown no-arrow">
                            <a
                              aria-expanded="false"
                              data-toggle="dropdown"
                              className="dropdown-toggle nav-link"
                              href="#"
                            >
                              <span className="badge badge-danger badge-counter">
                                7
                              </span>
                              <i className="fas fa-envelope fa-fw" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-list animated--grow-in">
                              <h6 className="dropdown-header">alerts center</h6>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="dropdown-list-image mr-3">
                                  <img
                                    className="rounded-circle"
                                    src="avatars/Linkvatar4.jpeg"
                                  />
                                  <div className="bg-success status-indicator" />
                                </div>
                                <div className="font-weight-bold">
                                  <div className="text-truncate">
                                    <span>
                                      Bonjour, c'est votre docteur BOUBOUH,
                                      pouvez-vous me donner accès à votre
                                      dossier médical ?
                                    </span>
                                  </div>
                                  <p className="small text-gray-500 mb-0">
                                    BOUBOUH Ayman - 58m
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="dropdown-list-image mr-3">
                                  <img
                                    className="rounded-circle"
                                    src="avatars/Linkvatar2.jpeg"
                                  />
                                  <div className="status-indicator" />
                                </div>
                                <div className="font-weight-bold">
                                  <div className="text-truncate">
                                    <span>
                                      N'oubliez pas votre consultation le Lundi
                                      prochain
                                    </span>
                                  </div>
                                  <p className="small text-gray-500 mb-0">
                                    Dr. BENISS Meryem - 1d
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="dropdown-list-image mr-3">
                                  <img
                                    className="rounded-circle"
                                    src="avatars/Linkvatar3.jpeg"
                                  />
                                  <div className="bg-warning status-indicator" />
                                </div>
                                <div className="font-weight-bold">
                                  <div className="text-truncate">
                                    <span>
                                      Votre dossier CNSS nécessite votre
                                      attention !
                                    </span>
                                  </div>
                                  <p className="small text-gray-500 mb-0">
                                    CNSS - 2d
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center"
                                href="#"
                              >
                                <div className="dropdown-list-image mr-3">
                                  <img
                                    className="rounded-circle"
                                    src="avatars/Linkvatar5.jpeg"
                                  />
                                  <div className="bg-success status-indicator" />
                                </div>
                                <div className="font-weight-bold">
                                  <div className="text-truncate">
                                    <span>
                                      Avez vous oubliez de mettre à jour vos
                                      métriques de santé ?
                                    </span>
                                  </div>
                                  <p className="small text-gray-500 mb-0">
                                    Sihat-e· 2w
                                  </p>
                                </div>
                              </a>
                              <a
                                className="dropdown-item text-center small text-gray-500"
                                href="#"
                              >
                                Show All Alerts
                              </a>
                            </div>
                          </div>
                          <div
                            className="shadow dropdown-list dropdown-menu dropdown-menu-right"
                            aria-labelledby="alertsDropdown"
                          />
                        </li>
                        <div className="d-none d-sm-block topbar-divider" />
                        <li className="nav-item dropdown no-arrow">
                          <div className="nav-item dropdown no-arrow">
                            <a
                              aria-expanded="false"
                              data-toggle="dropdown"
                              className="dropdown-toggle nav-link"
                              href="#"
                            >
                              <span className="d-none d-lg-inline mr-2 text-gray-600 small">
                                {!this.props.patientData.about_reducer.patients[0]
                                  ? "loading"
                                  : this.props.patientData.about_reducer.patients[0]
                                      .email === undefined
                                  ? " "
                                  : this.props.patientData.about_reducer.patients[0].email}
                              </span>
                              <img
                                className="border rounded-circle img-profile"
                                src="avatars/Linkvatar1.jpeg"
                              />
                            </a>
                            <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in">
                              <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                                &nbsp;Profile
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                                &nbsp;Settings
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                                &nbsp;Activity log
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item"
                                href="#"
                                onClick={this.patientDashboarLogout}
                              >
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                &nbsp;Logout
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>

              {/*  THE IMPORTANT STUFF TO RENDER */}
              <div
                id="modal"
                className="d-xl-flex justify-content-xl-center align-items-xl-center"
              >
                <div id="formCardContainer">
                  <div>
                    <div className="row register-form">
                      <div className="col-md-8 col-xl-10 offset-md-2 offset-xl-0">
                        <form
                          id="metrixForm"
                          className="custom-form"
                          method="post"
                        >
                          <div className="d-xl-flex align-items-xl-start">
                            <Link to="/metrix">
                              <i class="fas fa-angle-left fa-2x"></i>
                            </Link>

                            <h5 className="retourMetrix">Poids.</h5>
                          </div>

                          {/* End Radios */}
                        </form>
                      </div>
                    </div>
                    {/*  Create  */}
                    <div className="metrixWrapper">
                      <Modal
                        submit={this.props.handleSubmit(this.creatPoids)}
                        modalTitle={this.state.modalTitle}
                        show={this.state.show}
                        handleClose={this.hideModalCreat}
                      >
                        {/* children */}
                        <strong>
                          <p>Poids :</p>
                        </strong>
                        <Field
                          className="form-control"
                          name="kg"
                          component={this.renderInput}
                          label="Votre poids :"
                          placeholder="Ajouter votre poids en kg"
                          type="text"
                          span="kg"
                        />
                        <strong>
                          <p>Date de ce Poids :</p>
                        </strong>
                        <Field
                          className="form-control"
                          name="date"
                          component={this.renderInput}
                          label="La date de votre mesure :"
                          type="date"
                        />

                        {/* <strong><p>Date de cette Mesure :</p></strong> */}
                      </Modal>

                      <Link onClick={this.showModalCreat} className="fasflex">
                        <p>Ajouter Votre Poids</p>
                        <i className="fas fa-plus fa-2x"></i>
                      </Link>
                      <div id="taillemetricyourmetric">
                        <div>
                          <h4>Votre poids le plus récent :</h4>
                        </div>

                        <div>
                          <h3>
                            <strong>
                              {!this.props.poidsData.poids_reducer.dataOk
                                ? " _ "
                                : this.props.poidsData.poids_reducer.poids
                                    .last_weight === undefined
                                ? " _ "
                                : ` ${this.props.poidsData.poids_reducer.poids.last_weight.kg} kg `}
                            </strong>
                          </h3>
                          <p>
                            {!this.props.poidsData.poids_reducer.dataOk
                              ? " _ "
                              : this.props.poidsData.poids_reducer.poids
                                  .last_weight === undefined
                              ? " _ "
                              : ` ${this.props.poidsData.poids_reducer.poids.last_weight.date}  `}
                          </p>
                        </div>
                      </div>
                      <div className="flexedHistorique">
                        <h5>Historique :</h5>
                      </div>
                      {this.renderList()}
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
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
    poidsData: state,
    patientData: state,

  };
};

const mapDispatchToProps = (dispatch, formValues, id) => {
  return {
    fetchPoidsInfos: () => dispatch(fetchPoidsInfos()),
    createPoids: (formValues) => dispatch(createPoids(formValues)),
    editPoids: (formValues, id) => dispatch(editPoids(formValues, id)),
    deletePoids: (id) => dispatch(deletePoids(id)),
    fetchAboutInfos: () => dispatch(fetchAboutInfos()),
    logout: () => dispatch(logout()),
  };
};

MetrixPoids = connect(mapStateToProps, mapDispatchToProps)(MetrixPoids);

export default reduxForm({
  form: "MetrixPoidsHistoryandAdd", // a unique name for this form
  enableReinitialize: true,
})(MetrixPoids);
