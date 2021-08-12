// import { API_SUCCESS, API_ERROR } from "./actions/api";

import { FETCH_ABOUT } from "../actions/types";
import _ from 'lodash';

const initialState = {
    loading: false,
    patients: [],
    error: ''
  }

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PATIENTS_REQUEST':
        return {
          ...state,
          loading: true
        }
      case FETCH_ABOUT:
        return {
          loading: false,
          patients: action.payload,
          error: ''
        }
      case 'FETCH_PATIENTS_FAILURE':
        return {
          loading: false,
          patients: [],
          error: action.payload
        }
      default: return state
    }
  }
  export default reducer


















// export default (
//   state = {
//     isAuthUser: !!localStorage.getItem("user"),
//     user: JSON.parse(localStorage.getItem("user")) || {},
//     isLoading: false,
//     error: null
//   },
//   action
// ) => {
//   switch (action.type) {
//     case API_SUCCESS:
//       localStorage.setItem("user", JSON.stringify(action.payload.user));
//       return { ...state, isAuthUser: true, user: action.payload.user };
//     case API_ERROR:
//       return { ...state, error: action.payload };
//     case SET_LOADER:
//       return { ...state, isLoading: action.payload };
//     case LOGOUT:
//       localStorage.removeItem("user");
//       return { ...state, isAuthUser: false, user: {} };
//     default:
//       return state;
//   }
// };
// import { formValueSelector } from 'redux-form';
// import {
//     SIGN_IN, SIGN_OUT, CREATE_NEWSLETTER, CREATE_PATIENT, CREATE_MEDECIN, FETCH_PATIENT, FETCH_MEDECIN, DELETE_PATIENT, DELETE_MEDECIN, FETCH_PATIENT_ABOUT
// } from '../../actions/types'


// export default (aboutInfos = {}, action) => {
//     switch (action.type) {
//         case FETCH_PATIENT_ABOUT:
//             // return { ...aboutInfos, ...(action.payload) }
//             return {...aboutInfos, [action.payload]: action.payload  };
//         default:
//             return aboutInfos;
//     }
// }

        // const handleSubmit = useCallback(
        // () => sendRequest(formValues)
        //     .then(response => dispatch({
        //     type: 'SUBMISSION_SUCCESS',
        //     response,
        //     }))
        //     .catch(error => dispatch({
        //     type: 'SUBMISSION_FAILURE',
        //     error,
        //     })),
        // [dispatch, phoneNumber],
        // );