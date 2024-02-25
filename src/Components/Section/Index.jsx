import React from "react";
import PropTypes from "prop-types";
import SectionStyle from "./Style.jsx";

// Compoments
import StickyNav from '../../Components/StickyNav/Index.jsx';
import Card from '../../Components/Card/Index';
import WorkInProgress from '../../Components/WorkInProgress/Index.jsx';

function Section({ basename, pageTitle }) {

  let content;

  switch (pageTitle) {
    case 'Home':
      content = (
        <>
          <div className="Section--Row">
            <StickyNav basename={basename} />
            <Card basename={basename} />
          </div>
        </>
      );
      break;
    case 'Boutique':
      content = (
        <>
          <div className="Section--Column">
            <h2>Les produits de la ruche</h2>
            <p>Bienvenue sur la page boutique de notre ruche en ligne. Découvrez un sélection de produits de qualité, soigneusement récoltés et préparés par mes soins.</p>
            <p>Pour passer commande, rien de plus simple : Appelez-moi au 06 00 00 00 00</p>
            <p>ou envoyez-moi un email contenant votre commande à
              <a href="mailto:mielderiviere@gmail.com">mielderiviere@gmail.com</a></p>
            <p>Bien évidemment je suis disponible pour toute demande d'informations complémentaires.</p>
            <p>Merci de soutenir ma petite entreprise et de contribuer à la préservation des abeilles, de la nature et des traditions apicoles.</p>
            <WorkInProgress basename={basename} />
          </div>
        </>
      );
      break;
    default:
      content = (
        <p> Error </p>
      );
  }

  return (
    <SectionStyle>
      {content}
    </SectionStyle>
  );
}

Section.propTypes = {
  basename: PropTypes.string,
  pageTitle: PropTypes.string
};

export default Section;