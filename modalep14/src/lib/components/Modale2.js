import React, { useState } from "react";
import "./Modale2.css";

const Modale2 = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div id="confirmation">
      {modalVisible && (
        <div className="modal">
          <p>Employee Created!</p>
          <span onClick={closeModal}>X</span>
        </div>
      )}
    </div>
  );
};

export default Modale2;
