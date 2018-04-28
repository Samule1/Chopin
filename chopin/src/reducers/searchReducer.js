import { SEARCH_FOR_USERS, LOADING_SEARCH_RESULTS } from '../actions/types';

const initialState = {
    foundUsers: [],
    isLoading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_FOR_USERS:
            return {
                ...state,
                foundUsers: action.payload,
                isLoading: false
            }
        case LOADING_SEARCH_RESULTS:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}