import React from "react";
import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types";
import SectionStyle from "./Style.jsx";

// Compoments
import StickyNav from '../../Components/StickyNav/Index.jsx';
import Card from '../../Components/Card/Index';

function Section({ basename, pageTitle }) {

  let content;

  switch (pageTitle) {
    case 'Home':
      content = (
        <div className="Section--Row">
          <StickyNav basename={basename} />
          <Card basename={basename} pageTitle={pageTitle} />
        </div>
      );
      break;
    case 'Boutique':
      content = (
        <div className="Section--Column">
          <Card basename={basename} pageTitle={pageTitle}></Card>
        </div>
      );
      break;
    default:
      return <Navigate to="/Error" />
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