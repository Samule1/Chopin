/* This function constructs a valid header for GET requests */
export function makeAuthHeader() {
    let user_token = JSON.parse(localStorage.getItem('user_token'));

    if (user_token && user_token.token) {
        return { 'Authorization': 'Bearer ' + user_token.token };
    } else {
        return {};
    }
}
