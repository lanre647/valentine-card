import React from "react";
import "./Envelope.css";

const Envelope = ({ onClick }) => {
  return (
    <div className="envelope" onClick={onClick}>
      <div className="flap"></div>
      <div className="body"></div>
    </div>
  );
};

export default Envelope;
