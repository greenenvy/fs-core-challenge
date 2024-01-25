import React, { useEffect, useState } from "react";
import "./Chat.css";
import Message from "../Message/Message";
import LoginScreen from "../LoginScreen/LoginScreen";
import axios from "axios";
import ErrorHeader from "../ErrorHeader/ErrorHeader";
import Input from "../Input/Input";

const Chat = () => {
  const [error, setError] = useState(null);
  const [loggedOnUser, setLoggedOnUser] = useState("");
  const [messages, setMessages] = useState([]);

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

  useEffect(() => {
    axios
      .get("http://localhost:8888/message/all")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data);
        }
      });
  }, [loggedOnUser]);

  return (
    <div className="chat">
      {error && <ErrorHeader error={error}></ErrorHeader>}
      {loggedOnUser ? (
        <div>
          {messages.map((message) => {
            return (
              <Message message={message} loggedOnUser={loggedOnUser}></Message>
            );
          })}
          <Input></Input>
        </div>
      ) : (
        <LoginScreen login={login}></LoginScreen>
      )}
    </div>
  );
};

export default Chat;
