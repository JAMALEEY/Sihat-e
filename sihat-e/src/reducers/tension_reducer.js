  const tensioninitialState = {
      loading: false,
      responseOk: false,
      tension: [],
      error: ''
    }
  
  const reducer = (state = tensioninitialState, action) => {
      switch (action.type) {
          case 'FETCH_TENSION_REQUEST':
          return {
            ...state,
            loading: true
          }
        case 'FETCH_TENSION_METRIX':
          return {
            loading: false,
            responseOk: true,
            tension: action.payload,
            error: ''
          }
        case 'FETCH_TENSION_FAILURE':
          return {
            loading: false,
            notFound : true,
            tension: [],
            error: action.payload
          }
          case 'DELETE_TENSION_METRIX':
            return {
              loading: false,
              tension: action.payload,
              error: ''
            }
        default: return state
      }
    }
    export default reducer
  