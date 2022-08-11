import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const onClickHandler = (e) => {
    e.preventDefault();
    props.onClick(e.currentTarget.role);
  };
  return (
    <button
      className={props.default ? "" : classes.smallButton}
      onClick={onClickHandler}
      role={props.role}
    >
      <img src={props.img} alt={props.role} />
    </button>
  );
};

export default Button;
