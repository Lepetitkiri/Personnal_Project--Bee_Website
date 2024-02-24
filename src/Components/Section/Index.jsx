import React from "react";
import SectionStyle from "./Style.jsx";

// Compoments
import Card from '../../Components/Card/Index';

function Section({ basename }) {
  return (
    <SectionStyle>
      <Card basename={basename} />
    </SectionStyle>
  );
}

export default Section;