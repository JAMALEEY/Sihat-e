// I import reducer from the redux-form library so that this reducer manage automatically the states inside the reduxStore
import { reducer as newsletterReducer } from "redux-form";
import { reducer as signIn } from "redux-form";
// To manage my multiple reducers to be one single reducer ill use CombineReducers that takes parameters with what ill call inside my project
import { combineReducers } from "redux";



    // I pass in a parameter (form) of a value (reducer) so that I can let redux-form allow the reducer automatization
export default combineReducers ({
    form: newsletterReducer, signIn
});



// nb : each reducer updates a different part of the application state in response to dispatched redux actions.