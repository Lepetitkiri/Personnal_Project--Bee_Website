import React, { useContext } from "react";
import StickyNavStyle from "./Style.jsx";

import { MyContextForBasenameValue } from '../../index.js';

function StickyNav() {

  const basename = useContext(MyContextForBasenameValue);

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

export default StickyNav;