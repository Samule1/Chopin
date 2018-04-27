import { SPOTIFY_ACCESS_TOKEN } from '../actions/types';

const initialState = {
    accessToken: null,
    isAuthorized: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        /* Set the access token when we get it */
        case SPOTIFY_ACCESS_TOKEN:
            console.log('SPOTIFY_ACCESS_TOKEN case!');
            return {
                /* Spread operator helps us avoid Object.assign... */
                ...state,
                accessToken: action.accessToken,
                isAuthorized: true
            };
        default:
            return state;
    }
}