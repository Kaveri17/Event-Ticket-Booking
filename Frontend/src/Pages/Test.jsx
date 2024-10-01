




import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <div className='lg:w-1/3 lg:p:8 w-full border-gray-200 pb-12  '>
            <div className='w-1/3 mx-auto bg-gray-100   hover:bg-neutral-200  rounded-full p-6 img1'>
              <img src="/feature_1.png" alt="" className='w-full object-cover  max-w-full   ' />
            </div>

            <div className='p-6 text-center'>
              <h1 className='text-2xl font-bold pb-3'>Choose What To Do</h1>
              <p>Easily find your event via search system with multiple params</p>

            </div>
          </div>
        </div>
        <div>
        <div className='lg:w-1/3 lg:p:8 w-full border-gray-200 pb-12  '>
            <div className='w-1/3 mx-auto bg-gray-100   hover:bg-neutral-200  rounded-full p-6 img1'>
              <img src="/feature_1.png" alt="" className='w-full object-cover  max-w-full   ' />
            </div>

            <div className='p-6 text-center'>
              <h1 className='text-2xl font-bold pb-3'>Choose What To Do</h1>
              <p>Easily find your event via search system with multiple params</p>

            </div>
          </div>

        </div>
        <div>
        <div className='lg:w-1/3 lg:p:8 w-full border-gray-200 pb-12  '>
            <div className='w-1/3 mx-auto bg-gray-100   hover:bg-neutral-200  rounded-full p-6 img1'>
              <img src="/feature_1.png" alt="" className='w-full object-cover  max-w-full   ' />
            </div>

            <div className='p-6 text-center'>
              <h1 className='text-2xl font-bold pb-3'>Choose What To Do</h1>
              <p>Easily find your event via search system with multiple params</p>

            </div>
          </div>
        </div>
        
        
      </Slider>
    </div>
  );
}

export default AutoPlay;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { API } from '../config';

// const ResetPassword = () => {
//   const params = useParams()
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [success, setSuccess] = useState(false)


//   //read token

//   const token = params.token

//   const handleSubmit =  event => {
//     event.preventDefault()

//     //reset password
//     fetch(`${API}/user/reset-password/${token}`,{
//       method: 'POST',
//       headers: {
//           Accept: "application/json",
//           "content-type": "application/json"
//       },
//       body: JSON.stringify({ password })

//     })
//     .then(res=>res.json())
//     .then(data => {
//       if(data.error) {
//         setError(data.error)
//         setSuccess(false)
//       }
//       else{
//         setError('')
//         setSuccess(true)
//         setPassword('')
//       }
//     })
//     .catch(error => console.log(error))
//   }
  
//   const showError = () => {
//     if (error) {
//         alert(error)
//         setError('')
//     }
// }

// const showSuccess = () => {
//     if (success) {
//         alert("Your password has been successfully changed.")
//     }
// }


//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Reset Password</h2>
//         <form >
//         {showError()}
//         {showSuccess()}
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="password">New Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}

//               className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               placeholder="Your New Password"
//               required               onChange={(event) => setPassword(event.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white py-2 rounded-lg transition duration-200 hover:bg-orange-600" onClick={handleSubmit}
//           >
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;
