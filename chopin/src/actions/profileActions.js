import { FETCH_USER_INFO } from './types'
import { FETCH_USER_CLUSTER_LIST } from './types'
import store from '../store'

export const fetchUserInfo = () => dispatch => {
    let accessToken = store.getState().login.accessToken;

    fetch('http://192.168.0.101:3001/usr/me?token=' + accessToken)
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