import React from "react";
import AbilityButton from "./AbilityButton";
import classes from "./AbilitySelect.module.css";

const AbilitySelect = (props) => {
  const createButton = (info) => {
    return <AbilityButton {...info} key={info.slot} onClick={props.onClick} />;
  };
  return (
    <article className={classes.abilitySelect}>
      {props.data.map((el) => (el.slot !== "Passive" ? createButton(el) : ""))}
    </article>
  );
};

export default AbilitySelect;
