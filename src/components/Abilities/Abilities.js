import React, { useState } from "react";
import AbilitySelect from "../AbilitySelect/AbilitySelect";
import classes from "./Abilities.module.css";
import AbilityDescription from "./AbilityDescription";

const Abilities = (props) => {
  const [slot, setSlot] = useState("Ability1");
  const onClick = (x) => {
    setSlot(x);
  };

  return (
    <div className={classes.abilities}>
      <AbilitySelect data={props.data} onClick={onClick} activeSlot={slot} />
      <AbilityDescription data={props.data} slot={slot} />
    </div>
  );
};

export default Abilities;
