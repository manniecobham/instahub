import React, { useContext } from "react";
import lightningIcon from "../../../../images/Overview/lightning.svg";
import dollarIcon from "../../../../images/Overview/dollar.svg";
import mouse from "../../../../images/Overview/mouse.svg";
import ToggleGroup from "../../../UI/ToggleGroup";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../../../styles/UI/Card.styled";
import { useTheme } from "styled-components";
import Context from "../../../../context/context";

const RoomsOccupied = () => {
  const theme = useTheme();
  const context = useContext(Context);
  const titleSize = theme.typography.headerSize;

  return (
    <React.Fragment>
      <CardHeader>
        <CardTitle titleSize={titleSize}>Rooms Occupied</CardTitle>
        <ToggleGroup
          src1={lightningIcon}
          alt1="lightning"
          src2={dollarIcon}
          alt2="dollar"
        />
      </CardHeader>
      <CardContent>
        <p>
          <span className="lead">
            {context["userData"]["location"]["metrics"]["rooms_occupied"]}
          </span>
          /56
        </p>
      </CardContent>
      <CardFooter>
        <div></div>
        <img src={mouse} alt="^"></img>
      </CardFooter>
    </React.Fragment>
  );
};

export default RoomsOccupied;
