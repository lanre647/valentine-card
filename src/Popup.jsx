import React from "react";
import "./Popup.css";

const Popup = ({ imageUrl, message }) => {
  return (
    <div className="popup">
      <img src={imageUrl} alt="Receiver" className="popup-img" />
      <div className="popup-message">{message}</div>
    </div>
  );
};

export default Popup;
