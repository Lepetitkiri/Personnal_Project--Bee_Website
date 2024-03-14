import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import ErrorComponentStyle from "./Style.jsx";

// Componenets
import WorkInProgress from "../WorkInProgress/Index.jsx";

function ErrorComponent({ basename }) {

  return (
    <ErrorComponentStyle basename={basename}>
      <p>Oups un erreur</p>
      <Link className="Error--Link" to="/"> Cliquez ici pour retourner à l'accueil </Link>
      <WorkInProgress basename={basename} />
    </ErrorComponentStyle>
  );
}

ErrorComponent.propTypes = {
  basename: PropTypes.string
};

export default ErrorComponent;