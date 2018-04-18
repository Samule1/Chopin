/* All backend API calls are done from a service */
/* Available services can be found here */

import { makeAuthHeader } from './../util/make_auth_header';

export const backendService = {
    login,
    logout
};

function login() {
  console.log("service: login()");
  const req = {
    method: "GET",
    headers: {
      "Content-Type": "application/json" ,
      "Accept": 'application/json'
    }
  };

  return fetch('http://localhost:3001/authentication', { mode: 'no-cors' }, req)
    .then(user => {
        console.log("Got user: " + user + "and token: " + user.token + " as response!");
        if (user && user.token) {
          localStorage.setItem("user", user.token);
        }
        return user;
    });
}

function logout () {
  localStorage.removeItem("user_token")
}
