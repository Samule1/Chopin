import { FETCH_USER_INFO, FETCH_USER_CLUSTER_LIST } from '../actions/types';
import { DELETED_USER_CLUSTER, DELETING_USER_CLUSTER } from '../actions/types';

const initialState = {
    userData: {},
    clusterListData: [],
    deletingClusterId: null
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
        case DELETING_USER_CLUSTER:
            return {
                ...state,
                deletingClusterId: action.deletingClusterId
            }
        case DELETED_USER_CLUSTER:
            return {
                ...state
            }
        default:
            return state;
    }
}