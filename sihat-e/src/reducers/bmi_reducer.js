
  
  const bmiinitialState = {
      loading: false,
      myData: false,
      bmi: [],
      error: ''
    }
  
  const reducer = (state = bmiinitialState, action) => {
      switch (action.type) {
          case 'FETCH_BMI_REQUEST':
          return {
            ...state,
            loading: true,
          }
        case 'DELETE_BMI_METRIX':
          return (state, action.payload);
        case 'FETCH_BMI_METRIX':
          return {
            loading: false,
            myData: true,
            bmi: action.payload,
            error: ''
          }
        case 'FETCH_BMI_FAILURE':
          return {
            loading: false,
            notFound : true,
            bmi: [],
            error: action.payload
          }
          case 'DELETE_BMI_METRIX':
            return {
              loading: false,
              bmi: action.payload,
              error: ''
            }
        default: return state
      }
    }
    export default reducer
  