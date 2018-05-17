import { FETCH_KMEANS, SELECTED_CLUSTER } from './types'
import store from '../store'

export const fetchKmeans = () => dispatch => {
    let accessToken = store.getState().login.accessToken;
   
    fetch('/top?token=' + accessToken)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_KMEANS,
            payload: data
        }));
}

export const selectCluster = (songs) => dispatch => {
    dispatch({
        type: SELECTED_CLUSTER,
        payload: songs
    })
}

export const saveCluster = (name, tracks) => dispatch => {
    let accessToken = store.getState().login.accessToken;

    fetch('/usr/add/cluster', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            token: accessToken, 
            name: name,
            tracks: tracks
        })
    });
}