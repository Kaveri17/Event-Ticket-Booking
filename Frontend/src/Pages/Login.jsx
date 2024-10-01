import React, { useState } from 'react';
import { login } from '../api/Userapp';
import { Navigate, Router, useNavigate } from 'react-router-dom';


const Login = () => {
  
  const [email, setEmail] = useState('');        
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');        
  const [success, setSuccess] = useState(false); 


  const navigate = useNavigate(); 

  const handleLogin = async (event )=> {
    event.preventDefault()
    await login({email, password})
    .then(data => {
      if(data.error){
        setError(data.error)
        setSuccess(false)
      }
      else{
        setSuccess(true)
        setError('')
       
      }
    })
.catch(error => {
  console.log(error)
})
    
  }
  const showError = () => {
    if (error) {
      return <div className='text-red-600 text-xl font-bold text-center'>{error}</div>;
    }
  };
const redirect = () => {
  if(success){
    return navigate('/')
  }
}

  
  

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        {redirect()}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login</h2>
      
        <form  onSubmit={handleLogin}>
          {/* <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              // value={username}
            
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Username"
              required
              onChange={event => setUserName(event.target.value)}
            />
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Email</label>
            <input
              type="email"
              id="email"
              value={email}
             
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Email"
              required
              onChange={event=> setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
           
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Password"
              required
              onChange={event=> setPassword(event.target.value)}
            />
                {showError()}
          </div>
          <button
            type="submit"
            
            className="w-full bg-orange-500 text-white py-2 rounded-lg transition duration-200 hover:bg-orange-600"  
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/forgot-password" className="text-sm text-orange-500 hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
