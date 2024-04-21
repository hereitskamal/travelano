import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FloatingLabel = ({ id, label, type, autoComplete, required, handleChange, value, borderColor }) => {
    const [showPassword, setShowPassword] = useState(false);
  
   
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="relative">
        <input
          id={id}
          name={id}
          type={showPassword ? "text" : type}
          autoComplete={autoComplete}
          required={required}
          value={value}
          onChange={handleChange}
          className="
          block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 border-gradient-purple-blue-red appearance-none 
            focus:outline-none focus:ring-0 focus:border-gradient-purple-blue-red peer "
          placeholder=" "
          style={{ border: `1px solid lightgrey` }}
        />
        <label
          htmlFor={id}
          className="absolute text-sm text-gray-500  duration-300 rounded-full transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white
           
            px-2 peer-focus:px-2 peer-focus:text-blue-600
             peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 "
        >
          {label}
        </label>
        {type === "password" && (
          <div
            onClick={togglePasswordVisibility}
            className="absolute top-4 right-2 focus:outline-none text-base"
          >
            {showPassword ?  <FaEye color="grey" /> :<FaEyeSlash color="grey" />}
          </div>
        )}
      </div>
    );
  };

  export default FloatingLabel