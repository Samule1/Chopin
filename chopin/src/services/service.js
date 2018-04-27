/* All backend API calls are done from a service */
/* Available services can be found here */

import { makeAuthHeader } from './../util/make_auth_header';

export const backendService = {
    login,
    logout
};

function login() {
  console.log("service: login()");
  let req = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };

  //return push("/login");

  /*
  return fetch('/login', req)
    .then(response => {
      console.log(response);
    })
    .then(user => {
        console.log("Got user: " + user + "and token: " + user.token + " as response!");
        if (user && user.token) {
          localStorage.setItem("user", user.token);
        }
        return user;
    })
    .catch(error =>{console.log(error)});
    */
}

function logout () {
  localStorage.removeItem("user_token")
}
