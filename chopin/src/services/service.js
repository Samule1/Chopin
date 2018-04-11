/* All backend API calls are done from a service */
/* Available services can be found here */

export const backendService = {
    login,
    logout
};

function login(username, password) {
  console.log("service: login(" + username + ", " + password + ")");
  const req = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch("/user/login", req)
    .then(resp => {
      if (!resp.ok) {
          return Promise.reject(resp.statusText);
      }

      return resp.json();
    })
    .then(user => {
        console.log("Got user: " + user + "and token: " + user.token + " as response!");
        if (user && user.token) {
          localStorage.setItem("user", user.token);
        }
        return user;
    });
}

function logout () {
  localStorage.removeItem("user")
}
