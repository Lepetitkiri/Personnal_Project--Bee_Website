import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import ErrorComponentStyle from "./Style.jsx";

import { MyContextForBasenameValue } from '../../index.js';

import ShopPartStyle from '../ShopPart/Style.jsx';

function ErrorComponent() {

  const basename = useContext(MyContextForBasenameValue);

  const [isChecked, setIsChecked] = useState(Array(8).fill(false)); // Tableau d'états pour les boutons

  const handleButtonClick = (index) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsChecked(updatedChecked);
  };

  const allFalse = isChecked.every(value => value);

  return (
    <ErrorComponentStyle basename={basename}>
      <p>Oups, une erreur</p>
      <Link className="Error--Link" to="/"> Cliquez ici pour retourner à l'accueil </Link>
      <ShopPartStyle className="Error--Instructions">
        {allFalse ? <p> Victoire 🎉 Et si vous passiez commande maintenant ? </p> :
          <p> Maintenant c'est à vous de travailler. Cliquez sur toutes les fleurs pour les butiner🌱 </p>
        }
      </ShopPartStyle>

      <div className={allFalse ? "Error--Game__Victory" : "Error--Game"}>
        {
          allFalse ?
            <img alt="Femme dans un champ de tournesol" src={`${basename}/Pictures/Error-Page_Victory.jpg`} /> :
            isChecked.map((checked, index) => (
              <button key={index} onClick={() => handleButtonClick(index)}>
                <img alt={checked ? "Fleur blanche" : "Fleur rose"} src={`${basename}/Pictures/${checked ? 'flower-empty.png' : 'flower-full.png'}`} />
              </button>
            ))
        }
      </div>

    </ErrorComponentStyle >
  );
}

export default ErrorComponent;
