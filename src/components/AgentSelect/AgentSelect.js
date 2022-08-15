import React from "react";
import RoleSelection from "../RoleSelect/RoleSelection";
import classes from "./AgentSelect.module.css";
import AgentSelection from "./AgentSelection";

const AgentSelect = (props) => {
  return (
    <section className={classes.agentSelectContainer}>
      <RoleSelection default={false} onClick={props.onRoleSelect} />
      <h2>{props.role}</h2>
      {props.data[0] && <p>{props.data[0].role.description}</p>}
      <AgentSelection
        default={true}
        data={props.data}
        onAgentSelect={props.onAgentSelect}
      />
    </section>
  );
};

export default AgentSelect;
