import React from "react";
import "./PersonalMessage.css";

const PersonalMessage = ({ message }) => {
  return (
    <div className="personal-message">
      <div className="user">{message.sender}</div>
      <div className="content">{message.content}</div>
      <div className="date">
        {new Date(message.posted).toLocaleDateString()}
      </div>
    </div>
  );
};

export default PersonalMessage;
