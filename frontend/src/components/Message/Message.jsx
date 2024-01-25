import React from "react";
import "./Message.css";

const formatDate = (date) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = date.getDate().toString().padStart(2, "0");
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();

  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  // Omit the time part if it's 00:00
  if (hours === "00" && minutes === "00") {
    return `${day} ${month} ${year}`;
  } else {
    return `${day} ${month} ${year} ${hours}:${minutes}`;
  }
};

const Message = ({ message, loggedOnUser }) => {
  return (
    <div
      className={
        loggedOnUser === message.sender ? "personal-message" : "other-message"
      }
    >
      <div className="user">
        {loggedOnUser === message.sender ? "You" : message.sender}
      </div>
      <div className="content">{message.content}</div>
      <div className="date">{formatDate(new Date(message.posted))}</div>
    </div>
  );
};

export default Message;
