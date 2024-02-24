import React from "react";
import CardStyle from "./Style.jsx";

// Données
import HomeDatas from '../../Ressources/HomeDatas.json';

function Card() {

  return (
    <CardStyle>
      {HomeDatas.map((titre, index) => (
        <article key={`HomeDatas-${index}`}>
          <h2> {HomeDatas[index].titre} </h2>
          <h3> {HomeDatas[index]["sous-titre"]} </h3>
          <p> {HomeDatas[index].texte} </p>
        </article>

      ))}
    </CardStyle>
  );
}

export default Card;