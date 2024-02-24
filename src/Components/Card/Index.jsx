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
          )
          }
        </article>

      ))}
    </CardStyle>
  );
}

export default Card;