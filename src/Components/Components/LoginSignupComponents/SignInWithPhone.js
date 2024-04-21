import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import countryCodes from "./StaticArrays";
import FloatingLabel from "./FloatingLabel";
import { useNavigate } from "react-router-dom";
import OTPManualInput from "./OtpManualInput";
import toast from "react-hot-toast";
import CustomToast from "./CustomToast";

const OTPLoginPage = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [verificationReady, setVerificationReady] = useState(false);
  const [sendOtpClicked, setSendOtpClicked] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    countryCode: "+91",
    phoneNo: "",
  });
  const [otpEntered, setOtpEntered] = useState(["", "", "", "", "", ""]);

  useEffect(() => {
    let timer;
    if (sendOtpClicked && resendTimer > 0) {
      timer = setTimeout(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [sendOtpClicked, resendTimer]);

  const handleChange = (event) => {
    setVerificationReady(event.target.value.length === 6);
  };

  const handleChangePhone = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleResendOTP = async () => {
    if (!userData.phoneNo) {
      toast.error("Please enter your phone number.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/check-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNo: userData.phoneNo }),
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error("Failed to check user existence");
      }

      const data = await response.json();
      if (data.exists) {
        const generateOtp = () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(Math.floor(100000 + Math.random() * 900000));
            }, 3000);
          });
        };
        const generatedOtp = await generateOtp();
        setUserName(data.username);
        setOtp(generatedOtp);
        toast.success("OTP sent");
        setSendOtpClicked(true);
        setResendTimer(30);
        setLoading(false);
        console.log("OTP generated:", generatedOtp);
        await saveOtpToDatabase(data.userId, generatedOtp);
      } else {
        setLoading(false);
        setResendTimer(0);
        setSendOtpClicked(false);
        toast.error("User does not exist. Please sign up first.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setLoading(false);
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  const saveOtpToDatabase = async (userId, otp) => {
    try {
      const response = await fetch("http://localhost:5000/api/save-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, otp }),
      });

      if (!response.ok) {
        throw new Error("Failed to save OTP to database");
      }

      console.log("OTP saved to database successfully");
    } catch (error) {
      console.error("Error saving OTP to database:", error);
    }
  };

  const handleOTPVerification = () => {
    const enteredOTP = otpEntered.join("");
    console.log(enteredOTP, otp, "jiiiii");

    if (parseInt(enteredOTP) === otp) {
      navigate("/homePage");
      toast.success("Verified", userName);
      setTimeout(() => {
        toast.custom((t) => (
          <CustomToast
            userName={userName}
            message={
              "Welcome to Pictounic official website, Check out latest Packages!!"
            }
            onClose={() => toast.dismiss(t.id)}
          />
        ));
      }, 2000);
    } else {
      alert("Incorrect OTP. Please try again.");
    }

    setOtpEntered(["", "", "", "", "", ""]);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-xs">
        {sendOtpClicked ? (
          <h1 className="text-lg font-semibold my-4 text-emerald-500">
            Enter 6-Digit <strong>OTP</strong>{" "}
          </h1>
        ) : (
          <h1 className="text-lg font-semibold my-4 text-indigo-500">
            Enter You <strong>Phone No</strong>
          </h1>
        )}
        <div className="flex space-x-4">
          <div className="w-1/4">
            <select
              className="w-full p-3 pt-3.5 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name="countryCode"
              onChange={handleChange}
              value={userData.countryCode}
            >
              {countryCodes.map((country) => (
                <option key={country.id} value={country.code}>
                  ({country.code}) {country.country}
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
              handleChange={handleChangePhone}
            />
          </div>
        </div>
        {sendOtpClicked && (
          <>
            <br />
            <OTPManualInput
              onComplete={handleOTPVerification}
              setOtp={setOtpEntered}
              otp={otpEntered}
            />
            <div
              onClick={handleOTPVerification}
              type="button"
              className="mt-4 flex justify-center  items-center w-full bg-green-600 text-white p-2 rounded-md"
            >
              Verify
            </div>
          </>
        )}
        <button
          disabled={loading || resendTimer > 0}
          onClick={handleResendOTP}
          type="button"
          className={`mt-4 w-full bg-indigo-600 text-white p-2 flex justify-center items-align rounded-md ${
            loading ? "bg-green-600" : ""
          }`}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin mt-1" />
              &nbsp; Sending
            </>
          ) : resendTimer > 0 ? (
            `Resend OTP in ${resendTimer}s`
          ) : (
            "Send OTP"
          )}
        </button>
      </form>
    </div>
  );
};

export default OTPLoginPage;
