import React from "react";
import PropTypes from "prop-types";
import WorkInProgressStyle from "./Style.jsx";

function WorkInProgress({ basename }) {
  return (
    <WorkInProgressStyle>
      <img src={`${basename}/Pictures/work-in-progress.png`} alt="Travaux en cours" />
    </WorkInProgressStyle>
  );
}

WorkInProgress.propTypes = {
  basename: PropTypes.string
};

export default WorkInProgress;