import React from "react";
import classes from "./AbilityButton.module.css";

const AbilityButton = (props) => {
  const onClickHandler = (e) => {
    e.preventDefault();
    props.onClick(props.slot);
  };
  return (
    <button
      className={`${classes.abilityButton} ${classes.bg_slider} ${
        props.activeSlot === props.slot ? classes.active : ""
      }`}
      key={props.slot}
      onClick={onClickHandler}
    >
      <img src={props.displayIcon} alt="" />
    </button>
  );
};

export default AbilityButton;
