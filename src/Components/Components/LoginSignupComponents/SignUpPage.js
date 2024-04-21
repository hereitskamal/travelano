import React, { useState } from "react";
import TourLogoSignup from "../../Images/tour_icon2.jpg";
import { RiLoginCircleFill } from "react-icons/ri";
import FloatingLabel from "./FloatingLabel";
import { Form, useNavigate } from "react-router-dom";
import countryCodes from "./StaticArrays";
import toast from "react-hot-toast";
import PasswordStrengthChecker from "./PasswordStrengthChecker";
import { FaSpinner } from "react-icons/fa";
import { useEffect } from "react";
import CustomToast from "./CustomToast";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    countryCode: "+91",
    birthdate: "",
    mailId: "",
    password: "",
    confirmPassword:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const navigate = useNavigate()
  const handleSubmit = async (event) => {
   
    event.preventDefault();
    const user = {
      firstName: userData.firstName,
      lastName: userData.lastName,  
      phoneNo: userData.phoneNo,
      countryCode: userData.countryCode,
      birthdate: userData.birthdate,
      mailId: userData.mailId,
      password: userData.password,
      confirmPassword:userData.confirmPassword
    };
    if(user.confirmPassword !== user.password){
      toast.error("Password do not match")
      setUserData({
        password:'',
        confirmPassword:''
      })
      return
    }
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to register");
      }
      navigate("/homePage");
      setLoading(false);
      setTimeout(() => {
        toast.custom((t) => (
          <CustomToast
            userName={userData.firstName}
            message={
              "Welcome to Pictounic official website, Check out latest Packages!!"
            }
            onClose={() => toast.dismiss(t.id)}
          />
        ));
      }, 2000);
      
      toast.success("Registered successfully!");
      setUserData({
        firstName: "",
        lastName: "",
        phoneNo: "",
        countryCode: "+91",
        birthdate: "",
        mailId: "",
        password: "",
        confirmPassword:''
      });

    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.message || "Registration failed. Please try again.");
      setTimeout(() => {
         setLoading(false)
         setUserData({firstName: "",
         lastName: "",
         phoneNo: "",
         countryCode: "+91",
         birthdate: "",
         mailId: "",
         password: "",
        confirmPassword:''})
      }, 2000);
    }
    
  };

  
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="justify-center rounded-lg p-6 m-6 absolute bg-white lg:px-8">
          {/* <button
            onClick={handleNavigateLogin}
            className="w-10 h-10 bg-indigo-600 rounded-full flex justify-center   p-2 text-white hover:bg-red-500"
          >
            <RiLoginCircleFill size={"25px"} className="rotate-180" />
          </button> */}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              style={{ width: "300px" }}
              className="mx-auto w-auto"
              src={TourLogoSignup}
              alt="Your Company"
            />
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <FloatingLabel
                    id="firstName"
                    label="First Name"
                    type="text"
                    autoComplete="given-name"
                    required
                    name="firstName"
                    value={userData.firstName}
                    handleChange={handleChange}
                  />
                </div>
                <div className="flex-1">
                  <FloatingLabel
                    id="lastName"
                    label="Last Name"
                    type="text"
                    autoComplete="family-name"
                    name="lastName"
                    value={userData.lastName}
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <select
                    className="w-full p-3 pt-3.5 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="countryCode"
                    onChange={handleChange}
                    value={userData.countryCode}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.id} value={country.code}>
                        {country.country} ({country.code})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <FloatingLabel
                    id="phoneNo"
                    label="Phone Number"
                    type="tel"
                    autoComplete="tel"
                    required
                    name="phoneNo"
                    value={userData.phoneNo}
                    handleChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <FloatingLabel
                  id="mailId"
                  label="Email Address"
                  type="email"
                  autoComplete="email"
                  required
                  name="mailId"
                  value={userData.mailId}
                  handleChange={handleChange}
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <FloatingLabel
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                    required
                    name="password"
                    value={userData.password}
                    handleChange={handleChange}
                  />
                  <PasswordStrengthChecker
                    password={userData.password}
                    setPassword={(value) =>
                      setUserData({ ...userData, password: value })
                    }
                  />
                </div>
                <div className="flex-1">
                  <FloatingLabel
                    id="confirmPassword"
                    label="Confirm Pass.."
                    type="password"
                    autoComplete="new-password"
                    required
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <FloatingLabel
                    id="birthdate"
                    label="Birthdate"
                    type="date"
                    autoComplete="bday"
                    name="birthdate"
                    value={userData.birthdate}
                    handleChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="flex-1 flex justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin mt-1 " />
                      &nbsp; Registering..  
                    </>
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
