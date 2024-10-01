import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaKey, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { register } from "../api/Userapp";

const Register = () => {
  let [username, setUserName] = useState("");
  let [firstname, setFirstName] = useState("");
  let [lastname, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  let [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    let user = {
      username,
      firstname,
      lastname,
      email,
      phone,
      address,
      role,
      password,
    };
    try {
      const data = await register(user);
      if (!data.success) {
        setError(data.message || "Registration failed. Please try again.");
        setSuccess(false);
      } else {
        setSuccess(true);
        setError("");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
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
    <>
      <div className="">
        <div className="ram w-full h-screen ">
          <div className="py-20">
            <h1 className="text-3xl text-white text-center font-bold ">
              REGISTER
            </h1>

            <div className=" flex-wrap flex flex-row justify-center">
              <h1 className="text-white text-center font-semibold text-xl ">
                <Link to="/">Home</Link>{" "}
                <span className="ps-2">
                  {" "}
                  <i className="fa-solid fa-greater-than text-white "></i>{" "}
                </span>
              </h1>
              <h1 className="text-white text-center font-semibold text-xl  ps-2">
                <Link to="/register">Register</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* form of registeration */}

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-lg bg-gray-100 shadow-sm px-6 my-4 ">
          <h1 className="text-3xl font-bold pb-2 pt-3">Register User</h1>
          <div className="border-t-2 w-16 pb-6 border-red-500"></div>

          <form onSubmit={handleRegister}>
            {/* Username */}
            <div className="w-full flex items-center relative mb-4">
              <FaUser className="absolute left-2 top-1/2 transform -translate-y-2 text-gray-400" />
              <input
                className="border border-stone-400 w-full py-2 pl-8"
                type="text"
                placeholder="Username *"
                required
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
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
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
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
                id="lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
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
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Role Selection */}
            <div className="w-full flex items-center  mb-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  className="mr-2"
                  required
                  value="organizer"
                  checked={role === "organizer"} // Checking if Customer is selected
                  onChange={(e) => setRole(e.target.value)}
                />
                Organizer
              </label>
              <label className="ps-6 flex items-center">
                <input
                  type="radio"
                  name="role"
                  className="mr-2"
                  required
                  value="user"
                  checked={role === "user"} // Check if User is selected
                  onChange={(e) => setRole(e.target.value)}
                />
                User
              </label>
            </div>
            {showError()}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-orange-500 text-white w-full py-2 rounded-lg transition duration-300"
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
  );
};

export default Register;
