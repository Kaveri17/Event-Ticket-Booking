import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  FaKey, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import { IoLocation } from 'react-icons/io5';

const Register = () => {

  let [username, setUserName] = useState('')
  let[firstname, setFirstName]= useState('')
  let[lastname, setLastName] = useState('')
  let[email, setEmail] = useState('')
  let[phone, setPhone] = useState('')
  let[address, setAddress] =useState('')


  const handleRegister = e => {
    
  }


  return (
<>
<div className=''>
      <div className='ram w-full h-screen ' >

        <div className='py-20'>
          <h1 className='text-3xl text-white text-center font-bold '>REGISTER</h1>

          <div className=' flex-wrap flex flex-row justify-center'>
            <h1 className='text-white text-center font-semibold text-xl '><Link to='/'>Home</Link> <span className='ps-2'> <i class="fa-solid fa-greater-than text-white "></i> </span></h1>
            <h1 className='text-white text-center font-semibold text-xl  ps-2'><Link to='/register'>Register</Link></h1>


          </div>
        </div>
      </div>
      </div>
      {/* form of registeration */}


<div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-lg bg-cyan-100 shadow-sm px-6 my-4 ">
        <h1 className="text-3xl font-bold pb-2 pt-3">Register User</h1>
        <div className="border-t-2 w-16 pb-6 border-red-500"></div>

        <form action="">
          {/* Username */}
          <div className="w-full flex items-center relative mb-4">
            <FaUser className="absolute left-2 top-1/2 transform -translate-y-2 text-gray-400" />
            <input
              className="border border-stone-400 w-full py-2 pl-8"
              type="text"
              placeholder="Username *"
              required
            />
          </div>

          {/* First Name */}
          <div className="w-full flex items-center relative mb-4">
            <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="border border-stone-400 w-full py-2 pl-8"
              type="text"
              placeholder="First Name *"
              required
            />
          </div>

          {/* Last Name */}
          <div className="w-full flex items-center relative mb-4">
            <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="border border-stone-400 w-full py-2 pl-8"
              type="text"
              placeholder="Last Name *"
              required
            />
          </div>

          {/* Email */}
          <div className="w-full flex items-center relative mb-4">
            <MdEmail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="border border-stone-400 w-full py-2 pl-8"
              type="email"
              placeholder="Email *"
              required
            />
          </div>

          {/* Password */}
          <div className="w-full flex items-center relative mb-4">
            <FaKey className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="border border-stone-400 w-full py-2 pl-8"
              type="password"
              placeholder="Password *"
              required
            />
          </div>

          {/* Confirm Password */}
          {/* <div className="w-full flex items-center relative mb-4">
            <FaKey className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="border border-stone-400 w-full py-2 pl-8"
              type="password"
              placeholder="Confirm Password *"
              required
            />
          </div> */}

          {/* Phone */}
          <div className="w-full flex items-center relative mb-4">
            <FaPhoneAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="border border-stone-400 w-full py-2 pl-8"
              type="tel"
              placeholder="Phone"
              required
            />
          </div>

          {/* Address */}
          <div className="w-full flex items-center relative mb-4">
            <IoLocation className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="border border-stone-400 w-full py-2 pl-8"
              type="text"
              placeholder="Address"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="w-full flex items-center  mb-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="customer"
                className="mr-2"
                required
              />
              Customer
            </label>
            <label className="ps-6 flex items-center">
              <input
                type="radio"
                name="role"
                value="user"
                className="mr-2"
                required
              />
              User
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>

          {/* Login Link */}
          <div className="text-center mt-4 pb-3">
            <span>Already have an account? </span>
            <a href="/login" className="text-blue-500 hover:underline ">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  

</>
  )
}

export default Register

  