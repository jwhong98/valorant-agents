import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log("active:" + props.activeRole);
    console.log(props.role);
    props.onClick(e.currentTarget.dataset.role);
  };
  return (
    <button
      className={`${props.default ? classes.button : classes.smallButton} ${
        props.activeRole === props.role ? classes.active : ""
      }`}
      onClick={onClickHandler}
      data-role={props.role}
    >
      <img src={props.img} alt={props.role} />
    </button>
  );
};

export default Button;
