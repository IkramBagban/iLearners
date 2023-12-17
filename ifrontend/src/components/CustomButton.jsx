// Button.jsx
import React from "react";

const CustomButton = ({ children, onClick, color }) => {
  const baseStyle = "font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full";
  const colorStyle = color === 'green' ? "bg-green-500 hover:bg-green-700 text-white" : "bg-blue-500 hover:bg-blue-700 text-white";

  return (
    <button onClick={onClick} className={`${baseStyle} ${colorStyle}`}>
      {children}
    </button>
  );
};

export default CustomButton;
