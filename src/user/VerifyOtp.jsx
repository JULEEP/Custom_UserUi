import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
    let newOtp = [...otp];
    newOtp[index] = e.target.value.slice(0, 1); // Only allow a single digit per input
    setOtp(newOtp);

    // Focus the next input field if the current one is filled
    if (e.target.value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.join("") === "") {
      toast.error("Please enter the OTP.");
      return;
    }

    try {
      const response = await fetch("https://custom-shop-1.onrender.com/api/users/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: otp.join("") }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("User login successful.");
      } else {
        toast.error(data.error || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error during verification:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Verify Email</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                id={`otp-input-${index}`}
                className="w-14 h-14 text-center text-xl font-semibold border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="-"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-32 py-2 mx-auto bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition duration-200"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
