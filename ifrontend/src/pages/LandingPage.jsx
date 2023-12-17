import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to iLearner</h1>
      <p className="text-xl mb-6 text-center">Your one-stop platform for interactive learning experiences.</p>
      <div className="space-x-4">
        <button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-2 px-4 border border-blue-400 rounded shadow">
          Login
        </button>
        <button className="bg-white text-purple-600 hover:bg-purple-100 font-semibold py-2 px-4 border border-purple-400 rounded shadow">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
