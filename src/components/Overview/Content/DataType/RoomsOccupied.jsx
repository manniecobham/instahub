import React, { useContext, useState } from "react";
import lightningIcon from "../../../../images/Overview/lightning.svg";
import dollarIcon from "../../../../images/Overview/dollar.svg";
import mouse from "../../../../images/Overview/mouse.svg";
import { ToggleGroup, ToggleButton } from "../../../../styles/UI/Toggle.styled";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../../../styles/UI/Card.styled";
import { useTheme } from "styled-components";
import Context from "../../../../context/context";

const RoomsOccupied = (props) => {
  const theme = useTheme();
  const context = useContext(Context);
  const titleSize = theme.typography.headerSize;
  const bgColor = theme.colors.colorSecondaryWhite;
  const [firstIconIsActive, setFirstIconIsActive] = useState(true);
  const [secondIconIsActive, setSecondIsActive] = useState(false);

  const onClickFirst = () => {
    setFirstIconIsActive(true);
    setSecondIsActive(false);
  };

  const onClickSecond = () => {
    setSecondIsActive(true);
    setFirstIconIsActive(false);
  };
  return (
    <Card
      backgroundColor={
        firstIconIsActive && !secondIconIsActive
          ? bgColor
          : theme.colors.colorPrimaryNeutralBlue
      }
      className={`${props.classes}`}
    >
      {" "}
      <CardHeader>
        <CardTitle titleSize={titleSize}>Rooms Occupied</CardTitle>
        <ToggleGroup>
          <ToggleButton
            className={firstIconIsActive ? "active" : null}
            onClick={onClickFirst}
          >
            <img
              src={lightningIcon}
              alt="lightning"
              className={firstIconIsActive ? "filterBlack" : "filterGray"}
            />
          </ToggleButton>
          <ToggleButton
            className={secondIconIsActive ? "active" : null}
            onClick={onClickSecond}
          >
            <img
              src={dollarIcon}
              alt="dollar"
              className={secondIconIsActive ? "filterBlack" : "filterGray"}
            />
          </ToggleButton>
        </ToggleGroup>
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
    </Card>
  );
};

export default RoomsOccupied;
