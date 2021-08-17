import _ from 'lodash';

import { 
    CREATE_TAILLE_METRIX,
    FETCH_TAILLE_METRIX,
    DELETE_TAILLE_METRIX 
  } from "../actions/types";
  
  const initialState = {
      loading: false,
      recievedData: false,
      tailles: [],
      error: ''
    }
  
  const reducer = (state = initialState, action) => {
      switch (action.type) {
          case 'FETCH_TAILLE_REQUEST':
          return {
            ...state,
            loading: true
          }
        case FETCH_TAILLE_METRIX:
          return {
            loading: false,
            recievedData: true,
            tailles: action.payload,
            error: ''
          }
        case 'FETCH_TAILLE_FAILURE':
          return {
            loading: false,
            notFound : true,
            tailles: [],
            error: action.payload
          }
          case DELETE_TAILLE_METRIX:
            return {
              loading: false,
              tailles: action.payload,
              error: ''
            }
        default: return state
      }
    }
    export default reducer
  