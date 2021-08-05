// too manage the registration section of the application state


import { userConstants } from '../constants';

    export function registration(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            // on registration request it just sets a registering flag set to true 
        return { registering: true };
        case userConstants.REGISTER_SUCCESS:
        return {};
        case userConstants.REGISTER_FAILURE:
        return {};
        // On register success or failure it clears the registration state.
        default:
        return state
    }
    }