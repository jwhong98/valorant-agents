import React from "react";
import classes from "./AbilityDescription.module.css";

const AbilityDescription = (props) => {
  const ability = props.data.filter((item) => item.slot.includes(props.slot));
  return (
    <div className={classes.abilityDescription}>
      <h2> {ability[0].displayName}</h2>
      <p>{ability[0].description}</p>
    </div>
  );
};

export default AbilityDescription;
