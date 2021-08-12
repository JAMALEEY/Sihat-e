// I import reducer from the redux-form library so that this reducer manage automatically the states inside the reduxStore
import { reducer as newsletterReducer } from "redux-form";
import { reducer as signIn } from "redux-form";
import { reducer as signUpPatientState } from "redux-form";
import { reducer as logout } from "redux-form";
import { reducer as createAbout } from "redux-form";
import { reducer as dashboardPatientForm } from 'redux-form'
import { reducer as aboutInfos }  from "redux-form";
import { reducer as signInResponse }  from "redux-form";
// import aboutInfosReducer from './aboutInfosReducer'

// To manage my multiple reducers to be one single reducer ill use CombineReducers that takes parameters with what ill call inside my project
import { combineReducers } from "redux";
// import reducer from './aboutInfosReducer';
import { SIGN_IN, CREATE_PATIENT, SIGN_OUT, CREATE_ABOUT, FETCH_PATIENT_ABOUT} from "../actions/types";


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
    if (action.type === 'SIGN_IN') {
        return [...signInResponse, action.payload];
    } return signInResponse;
};

    // if (action.type === FETCH_PATIENT_ABOUT) {
    //     return {...aboutInfos,  [action.payload]: action.payload};
    // } return aboutInfos;
function aboutInfosReducer (state = [], action)  {
    switch (action.type) {
        case FETCH_PATIENT_ABOUT:
            return [...state,  action.payload];
            // return {...aboutInfos, [action.payload]: action.payload  };
        default:
            return state;
    }
}



// export default (aboutInfos = {}, action) => {
//     switch (action.type) {
//         case FETCH_PATIENT_ABOUT:
//             // return { ...aboutInfos, ...(action.payload) }
//             return {...aboutInfos, [action.payload]: action.payload  };
//         default:
//             return aboutInfos;
//     }
// }


const createAboutReducer = (createAbout = {}, action) => {
    if (action.type === CREATE_ABOUT) {
        return {...createAbout, [action.payload]: action.payload  };
    } return createAbout;
};




// const aboutInfoReducer = (aboutInfos = [], action) => {
//     if(action.type === FETCH_PATIENT_ABOUT) {
//         return [...aboutInfos, action.payload  ];
//     } return aboutInfos;
// }
// const aboutInfoReducer = (aboutInfos = [], action) => {
//     if(action.type === FETCH_PATIENT_ABOUT) {
//         return [...aboutInfos,  action.payload];
//     } return aboutInfos;
// }

    // I pass in a parameter (form) of a value (reducer that I renamed to newsletterReducer) so that I can let redux-form allow the reducer flow automatization 
export default combineReducers ({
    form: newsletterReducer, signIn, signUpPatientState, dashboardPatientForm,
    reducer: logout, createAbout, aboutInfos,
    signInResponse: signInResponseReducer,
    signUpPatienState: signUpPatientReducer,
    logout: logoutReducer,
    
    createAbout: createAboutReducer,
    aboutInfos: aboutInfosReducer
});






































// import { apiRequest } from "../actions/api";



// import { API_REQUEST, apiError, apiSuccess } from "../actions/api";



// nb : each reducer updates a different part of the application state in response to dispatched redux actions.


// const SERVER_URL = `http://127.0.0.1:8000`;

// export const appMiddleware = () => next => action => {
//   next(action);
//   switch (action.type) {
//     case LOGIN: {
//       next(
//         apiRequest({
//           url: `${SERVER_URL}/login`,
//           method: "POST",
//           data: action.payload
//         })
//       );
//       break;
//     }
//     default:
//       break;
//   }
// };



// export const apiMiddleware = ({ dispatch }) => next => action => {
//   next(action);

//   if (action.type === API_REQUEST) {
//     const { url, method, data } = action.meta;
//     axios({
//       method,
//       url,
//       data
//     })
//       .then(({ data }) => dispatch(apiSuccess({ response: data })))
//       .catch(error => {
//         console.log(error);
//         dispatch(apiError({ error: error.response.data }));
//       });
//   }
// };