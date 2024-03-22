import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types";
import CardStyle from "./Style.jsx";

// Données
import HomeDatas from '../../Ressources/HomeDatas.json';

// Componnents
import WeatherWidget from '../WeatherWidget/Index.jsx';
import ShopPart from '../ShopPart/Index.jsx';

// Context
import { MyContextForBasenameValue } from '../../index.js';
function Card({ pageTitle }) {

  const basename = useContext(MyContextForBasenameValue);

  let content;

  switch (pageTitle) {
    case 'Home':
      content = (
        <>
          <article className="Card--Column Card--Home">
            <WeatherWidget />
          </article>

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
            <ShopPart basename={basename} />
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
  pageTitle: PropTypes.string
};

export default Card;