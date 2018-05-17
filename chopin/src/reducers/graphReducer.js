import { FETCH_KMEANS, SELECTED_CLUSTER } from '../actions/types';

const initialState = {
    dataItems: [],
    selectedClusterItems: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_KMEANS:
            return {
                ...state,
                dataItems: action.payload
            };
        case SELECTED_CLUSTER:
            return {
                ...state,
                selectedClusterItems: action.payload
            }
        default:
            return state;
    }
}