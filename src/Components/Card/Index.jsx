import React from "react";
import CardStyle from "./Style.jsx";

// Données
import HomeDatas from '../../Ressources/HomeDatas.json';

function Card() {

  return (
    <CardStyle>
      {HomeDatas.map((titre, index) => (
        <article key={`HomeDatas-${index}`}>
          <h3> {HomeDatas[index].titre} </h3>
          <h4> {HomeDatas[index]["sous-titre"]} </h4>
          <p> {HomeDatas[index].texte} </p>
          < /article>

      ))}
        </CardStyle>
      );
}

      export default Card;