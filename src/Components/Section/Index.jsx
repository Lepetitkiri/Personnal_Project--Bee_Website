import React from "react";
import { Navigate } from 'react-router-dom';
import SectionStyle from "./Style.jsx";

// Compoments
import StickyNav from '../../Components/StickyNav/Index.jsx';
import Card from '../../Components/Card/Index';

function Section({ pageTitle }) {

  let content;

  switch (pageTitle) {
    case 'Home':
      content = (
        <div className="Section--Row">
          <StickyNav />
          <Card pageTitle={pageTitle} />
        </div>
      );
      break;
    case 'Boutique':
      content = (
        <div className="Section--Column">
          <Card pageTitle={pageTitle}></Card>
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

export default Section;