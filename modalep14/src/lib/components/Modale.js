// src/lib/components/Modale.js
import React from "react";
import PropTypes from "prop-types";

const Modale = ({ nom, prenom, age, onClose }) => {
  return (
    <div className="modale">
      <div className="content">
        <h2>Informations</h2>
        <p>Nom: {nom}</p>
        <p>Prénom: {prenom}</p>
        <p>Âge: {age}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

Modale.propTypes = {
  nom: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modale;
