import React from "react";
import { Link } from 'react-router-dom';
import HeaderStyle from "./Style.jsx";

function Header() {
  return (
    <HeaderStyle>
      <img alt="Abeille" src="./Pictures/Bee_Logo.png" />
      <h1>Votre apiculteur local à Rivière dans le Pas-de-calais</h1>
      <nav>
        <Link to="/"> Accueil </Link>
        <Link to="/Boutique"> Boutique </Link>
      </nav>
    </HeaderStyle>
  );
}

export default Header;