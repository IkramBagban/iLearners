import React, { useState } from "react";
import { onInputChange } from "../utils/helperFunctions";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const SignupPage = () => {
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    password: "",
  });

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

          <CustomButton color={"green"} onClick={() => {}}>
            Sign Up
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
