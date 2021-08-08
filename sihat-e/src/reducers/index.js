// I import reducer from the redux-form library so that this reducer manage automatically the states inside the reduxStore
import { reducer as newsletterReducer } from "redux-form";
import { reducer as signIn } from "redux-form";
import { reducer as signUpPatientState } from "redux-form";
// To manage my multiple reducers to be one single reducer ill use CombineReducers that takes parameters with what ill call inside my project
import { combineReducers } from "redux";
import reducer from './reducer';
import { SIGN_IN, CREATE_PATIENT} from "../actions/types";


const signUpPatientReducer = (signUpPatientState = {}, action) => {
    if (action.type === CREATE_PATIENT) {
        return {...signUpPatientState, [action.payload]: action.payload }
    } return signUpPatientState;
};


const signInResponseReducer = (signInResponse = {}, action) => {
    if (action.type === SIGN_IN) {
        return {...signInResponse, [action.payload]: action.payload  };
    } return signInResponse;
};


    // I pass in a parameter (form) of a value (reducer that I renamed to newsletterReducer) so that I can let redux-form allow the reducer flow automatization 
export default combineReducers ({
    form: newsletterReducer, signIn, signUpPatientState,
    // signIn: reducer,
    signInResponse: signInResponseReducer,
    signUpPatienStatet: signUpPatientReducer
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