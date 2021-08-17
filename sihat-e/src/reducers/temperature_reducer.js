const temperatureinitialState = {
    loading: false,
    recievedTemperatureData: false,
    temperature: [],
    error: ''
  }

const reducer = (state = temperatureinitialState, action) => {
    switch (action.type) {
        case 'FETCH_TEMPERATURE_REQUEST':
        return {
          ...state,
          loading: true
        }
      case 'FETCH_TEMPERATURE_METRIX':
        return {
          loading: false,
          recievedTemperatureData: true,
          temperature: action.payload,
          error: ''
        }
      case 'FETCH_TEMPERATURE_FAILURE':
        return {
          loading: false,
          notFound : true,
          temperature: [],
          error: action.payload
        }
        case 'DELETE_TEMPERATURE_METRIX':
          return {
            loading: false,
            temperature: action.payload,
            error: ''
          }
      default: return state
    }
  }
  export default reducer
