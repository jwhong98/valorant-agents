import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  const onClickHandler = () => {
    props.resetRole(false);
    props.resetAgentSelected(false);
    // props.resetAgents();
  };
  return (
    <div className={classes.header}>
      <h1 onClick={onClickHandler}>ValorAgents</h1>
    </div>
  );
};

export default Header;
