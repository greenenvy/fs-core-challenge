import React from "react";
import "./ErrorHeader.css";

const ErrorHeader = ({ error }) => {
  return (
    <div className="header">
      <div>{error.message}</div>
    </div>
  );
};

export default ErrorHeader;
