import React from "react";
import "./OtherMessage.css";

const OtherMessage = ({ message }) => {
  return (
    <div className="other-message">
      <div className="user">{message.sender}</div>
      <div className="content">{message.content}</div>
      <div className="date">
        {new Date(message.posted).toLocaleDateString()}
      </div>
    </div>
  );
};

export default OtherMessage;
