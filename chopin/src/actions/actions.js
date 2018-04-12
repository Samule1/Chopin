/* Import the backend API calling services */
import { backendService } from './../services/service';

/* Available Redux actions for the user */
export const actions = {
  login
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        backendService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    /* TODO: Dispatch the error ... */
                }
            );
    };
    function request(user) { return { type: "LOGIN_REQUEST", user } }
    function success(user) { return { type: "LOGIN_SUCCESS", user } }
    function failure(error) { return { type: "LOGIN_FAILURE", error } }
}
