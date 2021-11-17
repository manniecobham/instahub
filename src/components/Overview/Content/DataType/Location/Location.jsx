import React from "react";
import instahubImage from "../../../../../images/dummy_data/instahub-office.png";
import lightningIcon from "../../../../../images/card_data/lightning.png";
import dollarIcon from "../../../../../images/card_data/dollar.png";
import ToggleGroup from "../../../../UI/ToggleGroup";
import {
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../../../styles/UI/Card.styled";
import State from "./State";
import { useTheme } from "styled-components";

// CONVERT THE DIV INSIDE CARDHEADER INTO COMPONENT

const Location = (props) => {
  const theme = useTheme();
  const titleSize = theme.typography.headerSize;

  return (
    <React.Fragment>
      <CardHeader>
        <CardTitle titleSize={titleSize}>InstaHub Office</CardTitle>
        <div style={{ display: "flex" }}>
          <ToggleGroup
            src1={lightningIcon}
            alt1="lightning"
            src2={dollarIcon}
            alt2="dollar"
          />
          <State stateAbbr={"PA"} />
        </div>
      </CardHeader>
      <CardContent>
        <img src={instahubImage} alt="location" className="width:100%;" />
      </CardContent>
    </React.Fragment>
  );
};

export default Location;
