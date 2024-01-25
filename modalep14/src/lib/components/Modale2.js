// Modale2.js
import React from "react";
import "./Modale2.css";

const Modale2 = ({ visible, onClose }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <div id="confirmation" style={{ display: visible ? "flex" : "none" }}>
      <div className="modal">
        <p>Employee Created!</p>
        <span onClick={closeModal}>X</span>
      </div>
    </div>
  );
};

export default Modale2;
