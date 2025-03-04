import React from "react";

import locationIcon from "../../../../../images/Overview/locationIcon.svg";
import { StateContainer } from "../../../../../styles/Overview/Content/DataType/Spaces/Spaces.styled";

const State = (props) => {
  return (
    <StateContainer>
      <img src={locationIcon} alt="location" />
      <p>{props.stateAbbr}</p>
    </StateContainer>
  );
};

export default State;
