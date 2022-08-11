import React from "react";
import RoleSelection from "../RoleSelect/RoleSelection";
import Selection from "../RoleSelect/Selection";
import AgentButton from "./AgentButton";
import classes from "./AgentSelect.module.css";

const AgentSelect = (props) => {
  console.log("Agent Select rendered");
  const createButton = (info) => {
    return (
      <AgentButton
        key={info.uuid}
        agent={info.displayName}
        img={info.displayIcon}
        onClick={props.onAgentSelect}
      />
    );
  };
  return (
    <section className={classes.agentSelectContainer}>
      <RoleSelection default={false} onClick={props.onRoleSelect} />
      <h2>{props.role}</h2>
      {props.data[0] && <p>{props.data[0].role.description}</p>}
      <Selection>{props.data.map(createButton)}</Selection>
    </section>
  );
};

export default React.memo(AgentSelect);
