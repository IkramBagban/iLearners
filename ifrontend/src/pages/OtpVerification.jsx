import React, { useState } from "react";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the OTP verification logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
      <div className="p-8 bg-white rounded-lg shadow-md text-gray-800 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">OTP Verification</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">Enter OTP</label>
            <input type="text" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
