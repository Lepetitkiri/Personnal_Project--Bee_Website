import { React, useEffect } from "react";
import { Link } from 'react-router-dom';
import FooterStyle from "./Style.jsx";

function Footer() {

  useEffect(() => {
    // Déplace la fenêtre de navigateur vers le haut de la page lors du changement de route
    window.scrollTo(0, 0);
  }, []);

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