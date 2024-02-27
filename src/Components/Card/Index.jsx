import React from "react";
import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types";
import CardStyle from "./Style.jsx";

// Données
import HomeDatas from '../../Ressources/HomeDatas.json';

// Componnents
function Card({ basename, pageTitle }) {

  let content;

  switch (pageTitle) {
    case 'Home':
      content = (
        <>
          {HomeDatas.map((data, index) => (
            <article key={`HomeDatas-${index}`} className="Card--Row Card--Home" >
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
              {
                data.illustration && (
                  <img src={`${basename}/Pictures/${data.illustration}`} alt={data.alt} />
                )
              }
            </article >

          ))
          }
        </>
      );
      break;
    case 'Boutique':
      content = (
        <>
          <article className="Card--Column Card--Boutique">
            <h2>Les produits de la ruche</h2>
            <p>Bienvenue sur la page boutique de notre ruche en ligne. Découvrez un sélection de produits de qualité, soigneusement récoltés et préparés par mes soins.</p>
            <p>Pour passer commande, rien de plus simple : </p>
            <p><img className="Card--Boutique_img" alt="Mail" src={`${basename}/Pictures/Phone.png`} />
              Appelez-moi au 06 00 00 00 00</p>
            <p>ou envoyez-moi un email contenant votre commande à
              <a href="mailto:mielderiviere@gmail.com"> mielderiviere@gmail.com
                <img className="Card--Boutique_img" alt="Mail" src={`${basename}/Pictures/Mailto.png`} />
              </a>
            </p>
            <p>Bien évidemment je suis disponible pour toute demande d'informations complémentaires.</p>
            <p>Merci de soutenir ma petite entreprise et de contribuer à la préservation des abeilles, de la nature et des traditions apicoles.</p>
          </article >
          <article className="Card--Column Card--Boutique">
          </article>
        </>
      );
      break;
    default:
      return <Navigate to="/Error" />
  }

  return (
    <CardStyle>
      {content}
    </CardStyle>
  );
}

Card.propTypes = {
  basename: PropTypes.string,
  pageTitle: PropTypes.string
};

export default Card;