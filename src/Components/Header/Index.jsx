import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import HeaderStyle from "./Style.jsx";

function Header({ basename }) {
  return (
    <HeaderStyle basename={basename} >
      <img alt="Abeille" src={`${basename}/Pictures/Bee_Logo.png`} />
      <h1>Votre apiculteur local à Rivière dans le Pas-de-calais</h1>
      <nav>
        <Link to="/"> Accueil </Link>
        <Link to="/Boutique"> Boutique </Link>
      </nav>
    </HeaderStyle>
  );
}

Header.propTypes = {
  basename: PropTypes.string
};

export default Header;