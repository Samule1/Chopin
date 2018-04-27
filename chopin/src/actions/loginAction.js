import { SPOTIFY_ACCESS_TOKEN } from './types'

export const setToken = (accessToken) => dispatch => {
    if (accessToken) {
        //localStorage.setItem('accessToken', accessToken)
        console.log('loginAction(): accessToken: ' + accessToken);
    }
    dispatch({
        type: SPOTIFY_ACCESS_TOKEN,
        accessToken
    });
}