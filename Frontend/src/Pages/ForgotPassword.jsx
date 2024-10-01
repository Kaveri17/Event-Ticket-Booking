import { useState } from "react";
import { forgotPassword } from "../api/Userapp";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ email }).then((data) => {
        if (data.error) {
          setError(data.error);
          setSuccess(false);
        } else {
          setSuccess(true);
          setError("");
        }
      });
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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Email"
              required
            />
          </div>
          {showError()}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg transition duration-200 hover:bg-orange-600"
          >
            Reset password
          </button>
        </form>
        {/* {message && (
          <div className="mt-4 text-center text-gray-600">
            {message}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ForgotPassword;