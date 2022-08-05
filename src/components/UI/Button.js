import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  //   const onClick = (e) => {};
  return (
    <button>
      <img src={props.img} alt={props.role} />
    </button>
  );
};

export default Button;
