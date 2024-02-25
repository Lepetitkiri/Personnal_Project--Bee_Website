import React from "react";
import PropTypes from "prop-types";
import StickyNavStyle from "./Style.jsx";

function StickyNav({ basename }) {
  return (
    <StickyNavStyle>
      <h2> Me contacter </h2>
      <p> Pour toutes commandes veuillez me contacter</p>
      <div><img alt="Mail" src={`${basename}/Pictures/Phone.png`} />
        <p> par téléphone au </p>
        <p>06 00 00 00 00 </p></div>
      <div><img alt="Mail" src={`${basename}/Pictures/Mailto.png`} />
        <p> ou par email à </p>
        <p> <a href="mailto:mielderiviere@gmail.com">
          mielderiviere@gmail.com </a> </p></div>
    </StickyNavStyle >
  );
}

StickyNav.propTypes = {
  basename: PropTypes.string
};

export default StickyNav;