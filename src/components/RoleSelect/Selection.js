import React from "react";
import classes from "./Selection.module.css";

const Selection = (props) => {
  return (
    <div
      className={
        props.default ? classes.selectionContainer : classes.selectionSmall
      }
    >
      {props.children}
    </div>
  );
};

export default Selection;
