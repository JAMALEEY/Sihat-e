// in order to make requests over our newsletter API we take an instance of this API using axios to apply actions creators on it
// import api from "../Apis/api";
import { SIGN_IN, SIGN_OUT, CREATE_NEWSLETTER, CREATE_PATIENT, CREATE_MEDECIN, FETCH_PATIENT, FETCH_MEDECIN, DELETE_PATIENT, DELETE_MEDECIN, TOKEN_KEY, CREATE_ABOUT } from './types';
import history from "../helpers/history";
import api from '../Apis/api'

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
                const response = await api.get('/');
                dispatch ({
                    type: 'CREATE_LOGIN',
                    payload: response.data
            })
        }
        }


        export const createAbout = (formValues) => {
            return async (dispatch, getState) => {
                const {token} = getState().api
                const response = await api.post('/patients', {...formValues, token });
                dispatch ({
                    type: CREATE_ABOUT,
                    payload: response.data
                })
            }
        }

