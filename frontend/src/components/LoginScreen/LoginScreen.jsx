import React from "react";
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <div className="login-screen">
      <div className="user-login-field">
        <div>Enter your username:</div>
        <div>
          <input className="input-field" />
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
