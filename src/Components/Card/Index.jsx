import React from "react";
import PropTypes from "prop-types";
import CardStyle from "./Style.jsx";

// Données
import HomeDatas from '../../Ressources/HomeDatas.json';

function Card({ basename }) {

  return (
    <CardStyle>
      {HomeDatas.map((data, index) => (
        <article key={`HomeDatas-${index}`}>
          <div>
            <h2> {data.titre} </h2>
            <h3> {data["sous-titre"]} </h3>

            {/* Code de vérification de la présence des textes : */}
            {data.texte1 && <p>{data.texte1}</p>}
            {data.texte2 && <p>{data.texte2}</p>}
            {data.texte3 && <p>{data.texte3}</p>}
            {data.texte4 && <p>{data.texte4}</p>}
          </div>

          {/*Code de vérification de la présente de la donnée "illustration" */}
          {data.illustration && (
            <img src={`${basename}/Pictures/${data.illustration}`} alt={data.alt} />
          )}
        </article>

      ))}
    </CardStyle>
  );
}

Card.propTypes = {
  basename: PropTypes.string
};

export default Card;