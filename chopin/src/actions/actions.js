/* Import the backend API calling services */
import { backendService } from './../services/service';

/* Available user Redux actions */
export const actions = {
  login
};

function login() {
    return dispatch => {
        //dispatch(request({ username }));

        console.log("Login action!");

        backendService.login()
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
