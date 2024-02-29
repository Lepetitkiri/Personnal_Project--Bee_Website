import React from "react";
import PropTypes from "prop-types";
import ShopPartStyle from "./Style.jsx";

// Données
import ShopDatas from '../../Ressources/ShopDatas.json';

// Componnents
function ShopPart({ basename }) {

  return (
    <ShopPartStyle basename={basename} >
      <img src={`${basename}/Pictures/Arrow-left.png`} alt="Flèche vers la gauche" className="Card--Arrow" />
      <div>
        <h2><strong>{ShopDatas[0].titre}</strong></h2>
        <img src={`${basename}/Pictures/${ShopDatas[0].illustration}`} alt={ShopDatas[0].alt} />
        <p>{ShopDatas[0].description}</p>
        <p>{ShopDatas[0].infos}</p>
        <p>Poids : {ShopDatas[0].poids}</p>
        <p>Prix unitaire : {ShopDatas[0].prix}</p>
      </div>
      <img src={`${basename}/Pictures/Arrow-right.png`} alt="Flèche vers la droite" className="Card--Arrow" />
    </ShopPartStyle>
  );
}

ShopPart.propTypes = {
  basename: PropTypes.string
};

export default ShopPart;