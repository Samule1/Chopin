import { FETCH_USER_INFO, DELETING_USER_CLUSTER, DELETED_USER_CLUSTER } from './types'
import { FETCH_USER_CLUSTER_LIST } from './types'
import store from '../store'

export const fetchUserInfo = () => dispatch => {
    let accessToken = store.getState().login.accessToken;

    fetch('/usr/me?token=' + accessToken)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USER_INFO,
            payload: data
        }));
}

export const fetchUserClusterList = () => dispatch => {
    let accessToken = store.getState().login.accessToken;

    fetch('/usr/clusters?token=' + accessToken)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USER_CLUSTER_LIST,
            clusters: data
        }));
}

export const deleteUserClusterFromList = (clusterId) => dispatch => {
    let accessToken = store.getState().login.accessToken;

    fetch('/usr/cluster/delete', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            token: accessToken, 
            id: clusterId
        })
    })
    .then(() => dispatch(
        fetchUserClusterList()
    ))
    .then(() => dispatch({
        type: DELETED_USER_CLUSTER,
    }));
}

export const deletingUserCluster = userCluster => ({
    type: DELETING_USER_CLUSTER,
    userCluster
});