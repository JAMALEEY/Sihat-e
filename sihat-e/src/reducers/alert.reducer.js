import { alertConstants } from '../constants';

// The redux alert reducer handle the application state for alerts it updates state when an alert action is dispatched.

    export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
        return {
            type: 'alert-success',
            message: action.message
        };

        // when an alertConstants.SUCCESS action is dispatched, the reducer updates the alert state to an object with type: 'alert-success' and message: action.message.

        case alertConstants.ERROR:
        return {
            type: 'alert-danger',
            message: action.message
        };
        case alertConstants.CLEAR:
        return {};
        default:
        return state
    }
    }
    