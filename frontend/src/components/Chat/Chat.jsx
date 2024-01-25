import React, { useState } from "react";
import "./Chat.css";
import Message from "../Message/Message";
import LoginScreen from "../LoginScreen/LoginScreen";

const Chat = () => {
  const [loggedOnUser, setLoggedOnUser] = useState("");
  const messages = [
    {
      sender: "joffrey",
      content: "Brilliant",
      posted: new Date(1520636400000),
    },
    {
      sender: "NINJA",
      content: "Great resource, thanks",
      posted: new Date(1520672100000),
    },
    {
      sender: "i am mister brilliant",
      content: "THANKSSSS!!!!!",
      posted: new Date(1520673000000),
    },
    {
      sender: "martin57",
      content: "Thanks Peter",
      posted: new Date(1520673540000),
    },
    {
      sender: "Patricia",
      content: "Sounds good to me!",
      posted: new Date(1520673720000),
    },
    {
      sender: "user1",
      content:
        "Hey folks! I wanted to get in touch with you regarding the project. Please, let me know how you plan to contribute.",
      posted: new Date(1520673720000),
    },
  ];

  return (
    <div className="chat">
      {loggedOnUser ? (
        messages.map((message) => {
          return (
            <Message message={message} loggedOnUser={loggedOnUser}></Message>
          );
        })
      ) : (
        <LoginScreen></LoginScreen>
      )}
    </div>
  );
};

export default Chat;
