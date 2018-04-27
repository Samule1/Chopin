import { FETCH_KMEANS } from './types'
import store from '../store'

export const fetchKmeans = () => dispatch => {
    let accessToken = store.getState().login.accessToken;
   
    fetch('http://192.168.0.101:3001/top?token=' + accessToken)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_KMEANS,
            payload: data
        }));
}