import React from "react";
import classes from "./AgentButton.module.css";

const AgentButton = (props) => {
  const onClickHandler = () => {
    props.onClick(props.agent);
  };
  return (
    <button
      className={classes.agentButton}
      onClick={onClickHandler}
      agent={props.agent}
    >
      <img src={props.img} alt={props.agent} />
    </button>
  );
};

export default AgentButton;
