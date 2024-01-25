import React from "react";
import "./Input.css";

const Input = () => {
  return (
    <div className="message-input">
      <input className="message-field" type="text" />
      <button className="message-button">Send</button>
    </div>
  );
};

export default Input;
