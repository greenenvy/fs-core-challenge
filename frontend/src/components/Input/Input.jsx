import React, { useState } from "react";
import "./Input.css";

const Input = ({ sendMessage }) => {
  const [content, setContent] = useState("");

  return (
    <div className="message-input">
      <input
        value={content}
        onChange={(event) => setContent(event.target.value)}
        className="message-field"
        type="text"
      />
      <button
        onClick={() => {
          sendMessage(content);
          setContent("");
        }}
        className="message-button"
      >
        Send
      </button>
    </div>
  );
};

export default Input;
