import React from "react";
import lightningIcon from "../../../../images/card_data/lightning.png";
import dollarIcon from "../../../../images/card_data/dollar.png";
import ToggleGroup from "../../../UI/ToggleGroup";
import CardHeader from "../../../../styles/UI/Card/CardHeader.styled";
import CardTitle from "../../../../styles/UI/Card/CardTitle.styled";
import CardFooter from "../../../../styles/UI/Card/CardFooter.styled";
import CardContent from "../../../../styles/UI/Card/CardContent.styled";
import { useTheme } from "styled-components";

const HCWasted = () => {
  const theme = useTheme();
  const titleSize = theme.typography.headerSize;

  return (
    <React.Fragment>
      <CardHeader>
        <CardTitle titleSize={titleSize}>H/C Wasted</CardTitle>
        <ToggleGroup
          src1={lightningIcon}
          alt1="lightning"
          src2={dollarIcon}
          alt2="dollar"
        />
      </CardHeader>
      <CardContent>
        <p>$210/wk</p>
      </CardContent>
      <CardFooter>
        <div>
          <p>12.6% vs last week</p>
        </div>
        <img alt="?"></img>
      </CardFooter>
    </React.Fragment>
  );
};

export default HCWasted;
