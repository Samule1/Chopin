import { FETCH_KMEANS } from '../actions/types';

const initialState = {
    dataItems: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_KMEANS:
            return {
                ...state,
                dataItems: action.payload
            };
        default:
            return state;
    }
}