import React from "react";
import PropTypes from "prop-types";
import ShopPartStyle from "./Style.jsx";

// Données
import HomeDatas from '../../Ressources/HomeDatas.json';

// Componnents
function ShopPart({ basename }) {

  return (
    <ShopPartStyle basename={basename} >
    </ShopPartStyle>
  );
}

ShopPart.propTypes = {
  basename: PropTypes.string
};

export default ShopPart;