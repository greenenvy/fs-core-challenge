import React, { useState } from "react";
import "./Chat.css";
import Message from "../Message/Message";
import LoginScreen from "../LoginScreen/LoginScreen";
import axios from "axios";
import ErrorHeader from "../ErrorHeader/ErrorHeader";

const Chat = () => {
  const [error, setError] = useState(null);
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

  const login = (username) => {
    axios
      .post("http://localhost:8888/users/login", {
        username,
      })
      .then((response) => {
        setLoggedOnUser(response.data.username);
        setError(null);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data);
        }
      });
  };

  return (
    <div className="chat">
      {error && <ErrorHeader error={error}></ErrorHeader>}
      {loggedOnUser ? (
        messages.map((message) => {
          return (
            <Message message={message} loggedOnUser={loggedOnUser}></Message>
          );
        })
      ) : (
        <LoginScreen login={login}></LoginScreen>
      )}
    </div>
  );
};

export default Chat;
