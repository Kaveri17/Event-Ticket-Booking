import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyEmail } from "../api/Userapp";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";
// import { useAuthStore } from "../store/authStore";

const EmailVerification = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (index, value) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      // handles if more than 1 digit is pasted
      const pastedCode = value.slice(0, 6).split(""); // selects only 6 numbers from the given number and split the number into individual digit and put it into array pastedCode
      for (let i = 0; i < 6; i++) {
        //iterates 6 times
        newCode[i] = pastedCode[i] || ""; //puts the individual digits into newCode array and if there is not digit left an empty string or number is set i.e [" "] to put 6 elements in array
      }
      setCode(newCode); //sets the value of code with newCode
      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== ""); // findLastIndex starts from end of an array and continues until it finds the value that satisfies its condition
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5; //check id the last filled value is of last index/box or not and then increments it to the next index to focus that box
      inputRefs.current[focusIndex].focus(); //the dom element that has the indesx is focused or higlighted
    } else {
      // if only one digit code is pasted
      newCode[index] = value;
      setCode(newCode);

      // MOve focus to the next input field if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // handles the backspace key entered by the user
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const verificationCode = code.join(""); //joins the individual digit code present in the code array to send as a whole number
    try {
      const data = await verifyEmail(verificationCode);
      if (!data.success) {
        setError(data.message || "Verify email failed. Please try again.");
        setSuccess(false);
      } else {
        setSuccess(true);
        setError("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    // alert(`Verification Code Submitted: ${verificationCode}`);
  };

  //   for auto submission when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleVerify(new Event("submit"));
    }
  }, [code]);

  const showError = () => {
    if (error) {
      return (
        <div className="text-red-600 text-xl font-bold text-center">
          {error}
        </div>
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Verify Your Email
        </h2>
        <p className="text-center text-gray-800 mb-6">
          Enter the 6-digit code sent to your email address.
        </p>

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-between">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)} // el-> DOM elements(corresponding)
                type="text"
                maxLength="6"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-2xl font-bold text-gray-700 bg-slate-200 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            ))}
          </div>
          {showError()}
          <button
            type="submit"
            // className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
            className="w-full bg-orange-500 text-white py-2 font-bold rounded-lg shadow-lg transition duration-200 hover:bg-orange-600"
          >
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
