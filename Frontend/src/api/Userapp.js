// import { API } from "../config"


let API = "http://localhost:5000/api"

// export const register= (user) => {
//     console.log(import.meta.env.VITE_BACKEND_URL)
//     return fetch(`${API}/register`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)

//     })
//     .then(response => response.json())
//     .catch(error => console.log(error))

// }




export const login = (user) => {
    console.log(API)
    return fetch(`${API}/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

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



//Forget password
export const forgotPassword = (email) => {
  
    return fetch(`${API}/user/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email ),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };



