// in order to make requests over our newsletter API we take an instance of this API using axios to apply actions creators on it
// import api from "../Apis/api";
import { SIGN_IN, SIGN_OUT, CREATE_NEWSLETTER, CREATE_PATIENT, CREATE_MEDECIN, FETCH_PATIENT, FETCH_MEDECIN, DELETE_PATIENT, DELETE_MEDECIN, TOKEN_KEY, CREATE_ABOUT, FETCH_PATIENT_ABOUT, EDIT_PATIENT_ABOUT, FETCH_ABOUT } from './types';
import history from "../helpers/history";
import api from '../Apis/api'
import axios from 'axios';

// Adding all the action creators that we might work with





        export const createNewsletterEmail = (formValues) => {
            return async ( dispatch ) => {
                const response = await api.post('/newsletter', formValues);
                dispatch ({
                    type: CREATE_NEWSLETTER,
                    payload: response.data
                })
                    if (response.status == 422) {
                        dispatch ({
                        type: 'DUPLICATED_NEWSLETTER',
                        payload: response.data.errors.email
                        })
                    };   
            }
        }


        export const signUpPatient = (formValues, getState) => {
            return async (  dispatch  ) => {
                const response = await api.post('/register', formValues)
                localStorage.setItem(TOKEN_KEY, response.data.token);
                history.push('/dashboardPatient');
                dispatch ({
                    type: CREATE_PATIENT,
                    payload: response.data
                });
            }
        }


        export const createLogin = (formValues) => {
            // async function dispatch = redux thunk en rgos
            return async ( dispatch ) => {
                const response = await api.post('/login', formValues);
            dispatch ({
                type: SIGN_IN,
                payload: response.data
            });
            
                if (response.data) {
                    if(response.status == 200 && response.data.token) {
                        localStorage.setItem(TOKEN_KEY, response.data.token);
                        history.push('/dashboardPatient')
                    } else if (response.status == 200 && response.data.status === "401") {
                            console.log(response.data.status)
                            return
                    }
                }
            }
        }


        export const isLogin = () => {
                if (localStorage.getItem(TOKEN_KEY)) {
                    return true;
                }
                return false;
        }


        export const logout = () => {
            return async ( dispatch ) => {
            const response = await api.get('/logout');
            localStorage.clear();
            history.push('/');
            dispatch ({
                type: SIGN_OUT,
            });
            }
        }


        export const fetchLoginMsg = () => {
            return async ( dispatch ) => {
                const response = await api.get('/login');
                dispatch ({
                    type: 'CREATE_LOGIN',
                    payload: response.data
            })
        }
        }
        
        export const fetchAboutInfos = () => {
            return async ( dispatch ) => {
                const response = await api.get('/patient/fetch');                
                dispatch({ 
                    type: FETCH_PATIENT_ABOUT, 
                    payload: response.data 
                });
              }}

        // export const fetchAboutInfos = () => {
        //     const token = localStorage.getItem("TOKEN");
        //     fetch(api)
        //       .then((response) => response.json())
        //       .then((aboutInfos) => {
        //         this.setState({
        //           infos: aboutInfos.data,
        //           first_name: aboutInfos.data.first_name,
        //           last_name: aboutInfos.data.last_name,
        //           adress: aboutInfos.data.adress,
        //           birth_day: aboutInfos.data.birth_day,
        //           bio_sex: aboutInfos.data.bio_sex,
        //         });
        //         localStorage.setItem("myData", JSON.stringify(this.state.infos));
        //       })
        
        //       .catch((err) => {
        //         console.error(err);
        //       });
        //   };

        export const createAbout = (formValues) => {
            return async (dispatch) => {
                const response = await api.post('patient/create', formValues)
                dispatch ({
                    type: CREATE_ABOUT,
                    payload: response.data
                })
                if(response.status == 200 ) {
                    history.push('/edit')
            }
        }}

     //       return async ( dispatch ) => {
            //     const response = await api.post('/login', formValues);
            // dispatch ({
            //     type: SIGN_IN,
            //     payload: response.data
            // });
            
            //     if (response.data) {
            //         if(response.status == 200 && response.data.token) {
            //             localStorage.setItem(TOKEN_KEY, response.data.token);
            //             history.push('/dashboardPatient')
            //         } else if (response.status == 200 && response.data.status === "401") {
            //                 console.log(response.data.status)
            //                 return
            //         }
            //     }
            // }

                // export const fetchAboutInfos = () => async () => {
                //     return async (dispatch) => {
                //         const response = await api.get('/patient/fetch')
                //         dispatch ({
                //             type: FETCH_ABOUT,
                //             payload: response.data
                //         })
                //     //     if(response.status == 200 ) {

                //     // }
                // }}

                    // dispatch({
                    //     type: FETCH_PATIENT_ABOUT,
                        // payload: response.data.data
                    //     payload: response.status == 200 ? response.data.data : false 
                    // })
                        // if(response.status == 200 ) {
                        //     return response.data
                        // } else {
                        //     return {PatientAboutInfosNotInfos: true}
                        // }
        export const editAboutInfos = (formValues) => async dispatch => {
            const response = await api.put('patient/update', formValues);
            
            dispatch({ type: EDIT_PATIENT_ABOUT, payload: response.data });
            // history.push('/dashboardPatient');
        };
        
