import React from "react";
import "./Chat.css";

const Chat = () => {
  const messages = [
    {
      sender: "65b2104a7fbdbe6087ce1096",
      content: "Brilliant",
      posted: new Date(1520636400000),
    },
    {
      sender: "65b2104a7fbdbe6087ce1097",
      content: "Great resource, thanks",
      posted: new Date(1520672100000),
    },
    {
      sender: "65b2104a7fbdbe6087ce1098",
      content: "THANKSSSS!!!!!",
      posted: new Date(1520673000000),
    },
    {
      sender: "65b2104a7fbdbe6087ce1099",
      content: "Thanks Peter",
      posted: new Date(1520673540000),
    },
    {
      sender: "65b2104a7fbdbe6087ce109a",
      content: "Sounds good to me!",
      posted: new Date(1520673720000),
    },
    {
      sender: "65b2104a7fbdbe6087ce109b",
      content:
        "Hey folks! I wanted to get in touch with you regarding the project. Please, let me know how you plan to contribute.",
      posted: new Date(1520673720000),
    },
  ];
  const loggedOnUser = "user1";

  return <div className="chat">Chat</div>;
};

export default Chat;
