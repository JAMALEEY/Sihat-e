// I import reducer from the redux-form library so that this reducer manage automatically the states inside the reduxStore
import { reducer as newsletterReducer } from "redux-form";
// import { reducer as signIn } from "redux-form";
import { reducer as signUpPatientState } from "redux-form";
import { reducer as logout } from "redux-form";
// import { reducer as createAbout } from "redux-form";
import { reducer as dashboardPatientForm } from 'redux-form'
// import { reducer as aboutInfos }  from "redux-form";
// import { reducer as signInResponse }  from "redux-form";
// import aboutInfosReducer from './about_reducer'

// To manage my multiple reducers to be one single reducer ill use CombineReducers that takes parameters with what ill call inside my project
import { combineReducers } from "redux";
// import reducer from './aboutInfosReducer';
import { 
SIGN_IN, 
CREATE_PATIENT, 
SIGN_OUT, 
CREATE_ABOUT, 
CREATE_CONTACTINFO,  
CREATE_TAILLE_METRIX,
FETCH_TAILLE_METRIX,
DELETE_TAILLE_METRIX
} from "../actions/types";
import about_reducer from "./about_reducer";
import tailles_reducer from "./tailles_reducer";
import poids_reducer from "./poids_reducer";
import bmi_reducer from "./bmi_reducer";
import tension_reducer from "./tension_reducer";
import glucose_reducer from "./glucose_reducer";
import temperature_reducer from "./temperature_reducer";




const signUpPatientReducer = (signUpPatientState = {}, action) => {
    if (action.type === CREATE_PATIENT) {
        return {...signUpPatientState, [action.payload]: action.payload }
    } return signUpPatientState;
};

const logoutReducer = (logout = {}, action) => {
    if (action.type === SIGN_OUT) {
        return {...logout, [action.payload]: action.payload }
    } return logout;
};



const signInResponseReducer = (signInResponse = [], action) => {
    if (action.type === SIGN_IN) {
        return [...signInResponse, action.payload];
    } return signInResponse;
};


const createAboutReducer = (createAbout = {}, action) => {
    if (action.type === CREATE_ABOUT) {
        return {...createAbout, [action.payload]: action.payload  };
    } return createAbout;
};


const createContactInformationReducer = (state = {}, action) => {
    if (action.type === CREATE_CONTACTINFO) {
        return {...state, [action.payload]: action.payload  };
    } return state;
};

const createTailleReducer = (createTaille = {}, action) => {
    if (action.type === CREATE_TAILLE_METRIX) {
        return {...createTaille, [action.payload]: action.payload  };
    } return createTaille;
}

// const deleteTailleReducer = (state = {}, action) => {
//     if (action.type === DELETE_TAILLE_METRIX) {
//         return _.omit(state, action.payload);
//     } return createTaille;
// }


export default combineReducers ({
    form: newsletterReducer, signUpPatientState, dashboardPatientForm,
    reducer: logout, about_reducer, tailles_reducer, poids_reducer, bmi_reducer, tension_reducer, glucose_reducer, temperature_reducer,
    
    // signIn: signInReducer,
    signInResponse: signInResponseReducer,
    signUpPatienState: signUpPatientReducer,
    logout: logoutReducer,    
    createAbout: createAboutReducer,
    patientData: about_reducer,
    tailleData: tailles_reducer,
    poidsData: poids_reducer,
    bmiData: bmi_reducer,
    tensionData: tension_reducer,
    glucoseData: glucose_reducer,
    temperatureData: temperature_reducer
    // createContactInformation :createContactInformationReducer
    
    
});
























