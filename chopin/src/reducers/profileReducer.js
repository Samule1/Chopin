import { FETCH_USER_INFO, FETCH_USER_CLUSTER_LIST } from '../actions/types';

const initialState = {
    userData: {},
    clusterListData: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_USER_INFO:
            return {
                ...state,
                userData: action.payload
            };

        case FETCH_USER_CLUSTER_LIST:
            return {
                ...state,
                clusterListData: action.clusters
            }
        default:
            return state;
    }
}