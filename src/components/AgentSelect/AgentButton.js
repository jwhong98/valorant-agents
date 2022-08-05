import React from "react";
import classes from "./AgentButton.module.css";

const AgentButton = (props) => {
  return (
    <button>
      <img src={props.img} alt={props.agent} />
    </button>
  );
};

export default AgentButton;
