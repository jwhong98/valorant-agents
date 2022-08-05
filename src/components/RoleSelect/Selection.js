import React from "react";
import classes from "./Selection.module.css";

const Selection = (props) => {
  return <div className={classes.selectionContainer}>{props.children}</div>;
};

export default Selection;
