import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import HeaderStyle from "./Style.jsx";

import { MyContextForBasenameValue } from '../../index.js';
function Header() {

  const basename = useContext(MyContextForBasenameValue);

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

export default Header;