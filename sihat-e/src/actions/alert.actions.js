    
    
    
    import { alertConstants } from '../constants';
    export const alertActions = {
        success,
        error,
        clear
    };

    // I've wrapped the action methods in an alertActions object to simplifies importing them into other files.
function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}

// The implementation details for each action creator