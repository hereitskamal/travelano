import React, { useEffect, useState } from "react";
import axios from "axios";
import TourLogoSignup from "../../Images/tour_icon2.jpg";
import toast from "react-hot-toast";
import FloatingLabel from "./FloatingLabel";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import CustomToast from "./CustomToast";
import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import jwt_decode, { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    mailId: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const navigate = useNavigate();
  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        userData
      );

      navigate("/");

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userData", JSON.stringify(response.data.user));
      toast.success("logged in successfully");
      setTimeout(() => {
        toast.custom((t) => (
          <CustomToast
            userName={response.data.user.firstName}
            message={"Welcome back, Check out latest Packages!!"}
            onClose={() => toast.dismiss(t.id)}
          />
        ));
      }, 2000);
    } catch (error) {
      if (
        error.response.status === 401 &&
        error.response.data.error === "Incorrect password"
      ) {
        toast.error("Incorrect password. Please try again.");
      } else {
        console.error("Login failed:", error.response.data.error);
        toast.error("Login failed. Please check your email and password.");
      }
    }
  };
  async function handleCallbackResponse(response) {
    console.log("Encoded JWT Token:" + response.credential);
    var userObject = jwtDecode(response.credential);
    var user = jwtDecode(response.credential);

    console.log("hijiki", user);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/google-login",
        { token: response.credential, user }
      );
      console.log(data);
      if (data.exsist) {
        toast.success(`Welcome back! ${(" ", user.given_name)}`);
      } else {
        toast.success("Welcome new user!");
      }

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", response.credential);
      navigate("/");
    } catch (error) {
      console.error("Error during Google login:", error);
      toast.error("Login failed. Please try again.");
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "530019277639-rhshdg35d7mahkbc17p45s3hihtmojhl.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "Large",
    });
  }, []);

  const [userDetails, setuserDetails] = useState({})

  

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="justify-center rounded-lg p-6 m-6 absolute bg-white lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              style={{ height: "200px" }}
              className="mx-auto w-auto"
              src={TourLogoSignup}
              alt="Your Company"
            />
          </div>
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" >
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
              <div>
                <FloatingLabel
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  handleChange={handleChange}
                  value={userData.password}
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full font-semibold justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/SignInWithPhone")}
                type="button"
                className="w-full font-semibold justify-center rounded-md bg-green-600 px-3 py-2.5 text-sm mt-3 leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign In With Phone
              </button>
            </div>
            <hr className="my-4 " />
            <p className="flex justify-center items-center text-sm text-gray-600">
              Doesn't have an account? &nbsp;
              <button
                onClick={() => navigate("/signup")}
                className="text-indigo-600 font-semibold hover:underline focus:outline-none"
              >
                Sign Up
              </button>
            </p>
            <hr className=" mt-4" />
            <div className="m-4 text-center"></div>
            <div className="flex justify-center items-center flex-wrap gap-2">
              {/* // <button  
              //   className=" justify-center rounded-md items-center bg-red-500 px-3 py-2 text-sm leading-6 text-white shadow-sm border-2 border-white hover:border-grey-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              // ></button>
              // <button className=" justify-center rounded-md items-center bg-indigo-500 px-3 py-2 text-sm leading-6 text-white shadow-sm border-2 border-white hover:border-grey-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              //   <SocialIcon
              //     url="www.facebook.com"
              //     bgColor={"white"}
              //     fgColor={"indigo"}
              //     style={{ width: "32px", height: "32px" }}
              //   />
              // </button>
              // <button
              //   style={{
              //     background: "rgb(255,252,0)",
              //     background:
              //       "linear-gradient(34deg, rgba(255,252,0,1) 0%, rgba(255,0,0,1) 51%, rgba(222,0,255,1) 100%",
              //   }}
              //   className=" justify-center rounded-md items-center px-3 py-2 text-sm leading-6 text-white shadow-sm border-2 border-white hover:border-grey-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              // >
              //   <SocialIcon
              //     url="www.instagram.com"
              //     bgColor={"white"}
              //     fgColor={"red"}
              //     style={{ width: "32px", height: "32px" }}
              //   />
              // </button>

              // <button className=" justify-center rounded-md items-center bg-blue-500 px-3 py-2 text-sm leading-6 text-white shadow-sm border-2 border-white hover:border-grey-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              //   <SocialIcon
              //     url="www.twitter.com"
              //     bgColor={"white"}
              //     fgColor={"blue"}
              //     style={{ width: "32px", height: "32px" }}
              //   />
              // </button> */}
              <div id="signInDiv"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
