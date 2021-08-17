import { 
    CREATE_POIDS_METRIX,
    EDIT_POIDS_METRIX,
    DELETE_POIDS_METRIX
  } from "../actions/types";
  
  const poidsinitialState = {
      loading: false,
      dataOk: false,
      poids: [],
      error: ''
    }
  
  const reducer = (state = poidsinitialState, action) => {
      switch (action.type) {
          case 'FETCH_POIDS_REQUEST':
          return {
            ...state,
            loading: true
          }
        case 'FETCH_POIDS_METRIX':
          return {
            loading: false,
            dataOk: true,
            poids: action.payload,
            error: ''
          }
        case 'FETCH_POIDS_FAILURE':
          return {
            loading: false,
            notFound : true,
            poids: [],
            error: action.payload
          }
          case DELETE_POIDS_METRIX:
            return {
              loading: false,
              poids: action.payload,
              error: ''
            }
        default: return state
      }
    }
    export default reducer
  