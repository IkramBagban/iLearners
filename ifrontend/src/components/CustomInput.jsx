import React from "react";

{/* <div className="mb-4">
   <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
   <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
 </div> */}
const InputField = ({ label, type, value, onChange, id }) => {
  return (

    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input 
        id={id}
        type={type} 
        value={value} 
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default InputField;
