// import { API_SUCCESS, API_ERROR } from "./actions/api";


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
import {
    SIGN_IN, SIGN_OUT, CREATE_NEWSLETTER, CREATE_PATIENT, CREATE_MEDECIN, FETCH_PATIENT, FETCH_MEDECIN, DELETE_PATIENT, DELETE_MEDECIN
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case SIGN_IN:
            return 
        default:
            return state;
    }
}



export default (state = {}, action) => {
    switch (action.type) {
        case 'UNAU':
            return 
        default:
            return state;
    }
}