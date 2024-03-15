import { React, useState } from "react";
import PropTypes from "prop-types";
import ShopPartStyle from "./Style.jsx";

// Données
import ShopDatas from '../../Ressources/ShopDatas.json';

// Componnents
function ShopPart({ basename, ProductNumber }) {

  // Création du carrousel à partir du state : 
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ShopDatas.length - 1 ? 0 : prevIndex + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ShopDatas.length - 1 : prevIndex - 1));
  };

  return (
    <ShopPartStyle basename={basename} >
      <button onClick={prevSlide} className="Card--Arrow"><img src={`${basename}/Pictures/Arrow-Left.png`} alt="Flèche vers la gauche" /> </button>
      <div>
        <h2><strong>{ShopDatas[currentIndex].titre}</strong></h2>
        <img classname="Card--Picture" src={`${basename}/Pictures/${ShopDatas[currentIndex].illustration}`} alt={ShopDatas[currentIndex].alt} />
        <p>{ShopDatas[currentIndex].description}</p>
        <p>{ShopDatas[currentIndex].infos}</p>
        <p>Poids : {ShopDatas[currentIndex].poids}</p>
        <p>Prix unitaire : {ShopDatas[currentIndex].prix}</p>
      </div>
      <button onClick={nextSlide} className="Card--Arrow"><img src={`${basename}/Pictures/Arrow-Right.png`} alt="Flèche vers la droite" /> </button>
    </ShopPartStyle>
  );
}

ShopPart.propTypes = {
  basename: PropTypes.string
};

export default ShopPart;