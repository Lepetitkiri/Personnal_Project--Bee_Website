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
          <h2> {HomeDatas[index].titre} </h2>
          <h3> {HomeDatas[index]["sous-titre"]} </h3>

          {/*Code de vérification de la présente de la donnée "illustration" */}
          {HomeDatas[index].illustration === "" ? (
            <div></div>
          ) : (<img src={`${basename}/Pictures/${HomeDatas[index].illustration}`} ></img>)
          }

          {/* Code de vérification de la présence de texte2/3/4 : */}
          {HomeDatas[index].texte2 ? (
            <ul>
              <li> {HomeDatas[index].texte1} </li>
              <li> {HomeDatas[index].texte2} </li>
              {HomeDatas[index].texte3 && <li> {HomeDatas[index].texte3} </li>}
              {HomeDatas[index].texte4 && <li> {HomeDatas[index].texte4} </li>}
            </ul>
          ) : (
            <p> {HomeDatas[index].texte1} </p>
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