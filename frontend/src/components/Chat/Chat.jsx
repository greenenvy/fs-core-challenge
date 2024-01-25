import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import Message from "../Message/Message";
import LoginScreen from "../LoginScreen/LoginScreen";
import axios from "axios";
import ErrorHeader from "../ErrorHeader/ErrorHeader";
import Input from "../Input/Input";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const Chat = () => {
  const messageDiv = useRef(null);
  const [error, setError] = useState(null);
  const [loggedOnUser, setLoggedOnUser] = useState("");
  const [messages, setMessages] = useState([]);

  const scrollToBottom = () => {
    messageDiv.current?.scrollTo(0, messageDiv.current?.scrollHeight);
  };

  const login = (username) => {
    axios
      .post("/users/login", {
        username,
      })
      .then((response) => {
        setLoggedOnUser(response.data.username);
        sessionStorage.setItem("loggedOnUser", response.data.username);
        setError(null);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data);
        }
      });
  };

  const sendMessage = (content) => {
    axios
      .post("/message/post", {
        sender: loggedOnUser,
        content: content,
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data);
        }
      });
  };

  useEffect(() => {
    axios
      .get("/message/all")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data);
        }
      });
  }, [loggedOnUser]);

  useEffect(() => {
    if (sessionStorage.getItem("loggedOnUser")) {
      setLoggedOnUser(sessionStorage.getItem("loggedOnUser"));
    }

    const socket = new SockJS("/chat");
    const stompClient = new Client({
      webSocketFactory: () => socket,
    });

    stompClient.onConnect = (frame) => {
      console.log("Connected: " + frame);
      stompClient.subscribe("/all", (message) => {
        const mes = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, mes]);
      });
    };

    stompClient.activate();

    return () => {
      stompClient.deactivate();
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat">
      {error && <ErrorHeader error={error}></ErrorHeader>}
      {loggedOnUser ? (
        <React.Fragment>
          <div ref={messageDiv} className="message-container">
            {messages.map((message) => {
              return (
                <Message
                  key={message._id}
                  message={message}
                  loggedOnUser={loggedOnUser}
                ></Message>
              );
            })}
          </div>
          <Input sendMessage={sendMessage}></Input>
        </React.Fragment>
      ) : (
        <LoginScreen login={login}></LoginScreen>
      )}
    </div>
  );
};

export default Chat;
