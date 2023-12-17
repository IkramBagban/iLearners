import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { onInputChange } from "../utils/helperFunctions";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });


  const loginButtonHandler =(page) =>{
      navigate('/welcome')
  }

  const inputChangeHandler = (e) => {
    console.log(inputState);
    onInputChange(e, setInputState);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-pink-500 text-white">
      <div className="p-8 bg-white rounded-lg shadow-md text-gray-800 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Login
        </h2>
        <form>
          <CustomInput
            label="Email"
            type="email"
            id="email"
            value={inputState.email}
            onChange={inputChangeHandler}
          />

          <CustomInput
            label="Password"
            type="password"
            id="password"
            value={inputState.password}
            onChange={inputChangeHandler}
          />

          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Sign In
          </button> */}
          <CustomButton onClick={loginButtonHandler}>Login</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
