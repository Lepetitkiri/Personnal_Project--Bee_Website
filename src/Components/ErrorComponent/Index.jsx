import React, { useState } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import ErrorComponentStyle from "./Style.jsx";

import ShopPartStyle from '../ShopPart/Style.jsx';

function ErrorComponent({ basename }) {
  const [isChecked, setIsChecked] = useState(Array(9).fill(false)); // Tableau d'états pour les boutons

  const handleButtonClick = (index) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsChecked(updatedChecked);
  };

  return (
    <ErrorComponentStyle basename={basename}>
      <p>Oups un erreur</p>
      <Link className="Error--Link" to="/"> Cliquez ici pour retourner à l'accueil </Link>
      <ShopPartStyle className="Error--Instructions">
        <p> Maintenant c'est à vous de travailler. Cliquez sur toutes les fleurs pour les butiner🌱 </p>
      </ShopPartStyle>
      <div className="Error--Game">
        {isChecked.map((checked, index) => (
          <button key={index} onClick={() => handleButtonClick(index)}>
            {checked ? <img alt="Fleur blanche" src={`${basename}/Pictures/flower-empty.png`} /> : <img alt="Fleur rose" src={`${basename}/Pictures/flower-full.png`} />}
          </button>
        ))}
      </div>
    </ErrorComponentStyle>
  );
}

ErrorComponent.propTypes = {
  basename: PropTypes.string
};

export default ErrorComponent;
