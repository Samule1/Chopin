import { SEARCH_FOR_USERS, LOADING_SEARCH_RESULTS } from './types'
import store from '../store'

export const searchForUsers = (query) => dispatch => {
    let accessToken = store.getState().login.accessToken;

    dispatch(loadingSearchResult());

    fetch('/app/search?token=' + accessToken + '&query=' + query)
        .then(res => res.json())
        .then(data => dispatch({
            type: SEARCH_FOR_USERS,
            payload: data
        }));
}

export const loadingSearchResult = () => dispatch => {
    type: LOADING_SEARCH_RESULTS
};