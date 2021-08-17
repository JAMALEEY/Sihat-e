const glucoseinitialState = {
    loading: false,
    recievedGlucoseData: false,
    glucose: [],
    error: ''
  }

const reducer = (state = glucoseinitialState, action) => {
    switch (action.type) {
        case 'FETCH_GLUCOSE_REQUEST':
        return {
          ...state,
          loading: true
        }
      case 'FETCH_GLUCOSE_METRIX':
        return {
          loading: false,
          recievedGlucoseData: true,
          glucose: action.payload,
          error: ''
        }
      case 'FETCH_GLUCOSE_FAILURE':
        return {
          loading: false,
          notFound : true,
          glucose: [],
          error: action.payload
        }
        case 'DELETE_GLUCOSE_METRIX':
          return {
            loading: false,
            glucose: action.payload,
            error: ''
          }
      default: return state
    }
  }
  export default reducer
