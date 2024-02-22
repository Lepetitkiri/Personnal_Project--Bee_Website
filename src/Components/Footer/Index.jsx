import React from "react";
import { Link } from 'react-router-dom';
import FooterStyle from "./Style.jsx";

function Footer() {
  return (
    <FooterStyle>
      <div>
        <p> © Created by Domitille REGNAULT in 2024</p>
      </div>

      <nav>
        <Link to="/"> Accueil </Link>
        <Link to="/Boutique"> Boutique </Link>
      </nav>
    </FooterStyle>
  );
}

export default Footer;