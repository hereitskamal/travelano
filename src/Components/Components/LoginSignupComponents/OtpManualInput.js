import React, { useRef } from "react";

const OTPManualInput = ({ onComplete, otp, setOtp }) => {
  const inputRefs = useRef([]);

  const handleInputChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    // Handle moving focus to the next input
    const isAllDigitsEntered = newOtp.every((digit) => digit !== "");
    if (!isAllDigitsEntered && event.target.value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    // Handle backspace key
    if (event.key === "Backspace" && index > 0) {
      if (otp[index] === "") {
        inputRefs.current[index - 1].focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  return (
    <div>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleInputChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={{
            width: "45px",
            height: "45px",
            margin: "4px",
            fontSize: "20px",
            textAlign: "center",
            borderRadius: "5px",
            border: "1px solid lightGray",
            boxShadow: "inset 5px 5px 10px -12px rgba(0,0,0,0.65)",
          }}
        />
      ))}
    </div>
  );
};

export default OTPManualInput;
