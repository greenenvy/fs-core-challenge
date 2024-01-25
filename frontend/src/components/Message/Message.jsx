import React from "react";
import "./Message.css";

const Message = ({ message, loggedOnUser }) => {
  return (
    <div
      className={
        loggedOnUser === message.sender ? "personal-message" : "other-message"
      }
    >
      <div className="user">{message.sender}</div>
      <div className="content">{message.content}</div>
      <div className="date">
        {new Date(message.posted).toLocaleDateString()}
      </div>
    </div>
  );
};

export default Message;
