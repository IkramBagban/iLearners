import React from 'react';
import Header from '../components/Header';

const WelcomePage = () => {
  return (
    <>
     <Header />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to Our Community!</h1>
      <p className="text-xl mb-8 text-center px-4">
        Join us to explore a world of learning, sharing, and growing together.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-2 px-4 border border-blue-400 rounded shadow">
          Explore Now
        </button>
        <button className="bg-transparent hover:bg-white text-white hover:text-blue-600 py-2 px-4 border border-white rounded shadow">
          Learn More
        </button>
      </div>
    </div>

    <hr />

    <div className="flex min-h-screen bg-blue-100">
      <div className="m-auto w-full max-w-md">
        <div className="bg-white p-8 border-t-4 border-blue-600">
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
              User Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
              Login
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <p className="text-center text-grey text-xs">
          ©2023 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
    </>
  );
};

export default WelcomePage;
