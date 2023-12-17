import React, { useState } from "react";
import { onInputChange } from "../utils/helperFunctions";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const buttonClickHandler = (btn) => {
    if (btn === "signup") {
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  const inputChangeHandler = (e) => {
    console.log(inputState);
    onInputChange(e, setInputState);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-teal-600 text-white">
      <div className="p-8 bg-white rounded-lg shadow-md text-gray-800 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Sign Up
        </h2>
        <form>
          <CustomInput
            label="Name"
            type="text"
            id="name"
            value={inputState.name}
            onChange={inputChangeHandler}
          />

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

          <CustomButton
            color={"green"}
            onClick={() => buttonClickHandler("signup")}
          >
            Sign Up
          </CustomButton>
          <div
            onClick={() => buttonClickHandler("login")}
            className="flex mt-2 text-blue-500 cursor-pointer hover:text-green-500 justify-center"
          >
            Login
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
