// import { API } from "../config"

let API = "http://localhost:5000/api";

export const register = (user) => {
  return fetch(`${API}/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',// This ensures cookies are sent with the request
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const login = (email, password) => {
  //   console.log(API);
  return fetch(`${API}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',// This ensures cookies are sent with the request
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const forgotPassword = (email) => {
  return fetch(`${API}/user/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const resetPassword = (token, password) => {
  return fetch(`${API}/user/reset-password/${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const verifyEmail = (code) => {
  return fetch(`${API}/user/verify-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
// // to keep logged in
// export const authenticate = (data) => {
//     localStorage.setItem('jwt', JSON.stringify(data))
// }
// // to check if logged in
// export const isAuthenticate = () => {
//     if (localStorage.getItem('jwt')) {
//         return JSON.parse(localStorage.getItem('jwt'))
//     }
//     else {
//         return false
//     }
// }
