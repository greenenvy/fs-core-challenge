import React, { useState } from "react";
import "./LoginScreen.css";

const LoginScreen = ({ login }) => {
  const [username, setUsername] = useState("");

  return (
    <div className="login-screen">
      <div className="user-login-field">
        <div>Enter your username:</div>
        <div>
          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            className="input-field"
          />
          <button onClick={() => login(username)} className="login-button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
