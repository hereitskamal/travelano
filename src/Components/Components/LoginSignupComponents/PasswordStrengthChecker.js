import React, { useState, useEffect } from "react";

const PasswordStrengthChecker = ({ password, setPassword }) => {
    const [strength, setStrength] = useState(0);
    useEffect(() => {
        checkStrength(password);
      }, [password]);

  const checkStrength = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(password)) {
      setStrength(100);
    } else if (password.length >= 8 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/\d/)) {
      setStrength(75);
    } else if (password.length >= 6 && password.match(/[a-z]/) && password.match(/[A-Z]/)) {
      setStrength(50);
    } else if (password.length >= 4) {
      setStrength(25);
    } else {
      setStrength(0);
    }
  };

  const strengthColor = strength > 50 ? 'blue' : strength >= 25 && strength <= 50 ? 'green' : 'red';

  return (
    <div>
        <p
        style={{fontSize:'10px', margin:'5px'}}
        >Password strength: <strong style={{ color: strengthColor }}>{strength}%</strong></p>
    
    </div>
  );
};

export default PasswordStrengthChecker;