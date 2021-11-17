import React from "react";
import Button from "../../styles/UI/Button.styled";

const Toggle = (props) => {
  return (
    <Button>
      <img src={props.src} alt={props.alt} />
    </Button>
  );
};

export default Toggle;
