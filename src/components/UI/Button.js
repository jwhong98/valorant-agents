import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const onClickHandler = (e) => {
    e.preventDefault();
    props.onClick(e.currentTarget.dataset.role);
  };
  return (
    <button
      className={`${props.default ? "" : classes.smallButton} ${
        !props.default && props.activeRole === props.role ? classes.active : ""
      }`}
      onClick={onClickHandler}
      data-role={props.role}
    >
      <img src={props.img} alt={props.role} />
    </button>
  );
};

export default Button;
