import React from "react";
import classes from "./AgentSelection.module.css";
import AgentButton from "./AgentButton";
import Selection from "../RoleSelect/Selection";

const AgentSelection = (props) => {
  const createButton = (info) => {
    return (
      <AgentButton
        key={info.uuid}
        agent={info.displayName}
        img={info.displayIcon}
        onClick={props.onAgentSelect}
        default={props.default}
      />
    );
  };
  return (
    <div className={props.default ? "" : classes.agentSelectionSmall}>
      <Selection default={props.default}>
        {props.data.map(createButton)}
      </Selection>
    </div>
  );
};

export default AgentSelection;
