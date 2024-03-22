import React, { useContext } from "react";
import WorkInProgressStyle from "./Style.jsx";

import { MyContextForBasenameValue } from '../../index.js';

function WorkInProgress() {

  const basename = useContext(MyContextForBasenameValue);

  return (
    <WorkInProgressStyle>
      <img src={`${basename}/Pictures/work-in-progress.png`} alt="Travaux en cours" />
    </WorkInProgressStyle>
  );
}

export default WorkInProgress;