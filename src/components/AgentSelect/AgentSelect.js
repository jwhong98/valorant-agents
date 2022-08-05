import React from "react";
import Selection from "../RoleSelect/Selection";
import Button from "../UI/Button";
import AgentButton from "./AgentButton";
import classes from "./AgentSelect.module.css";

const AgentSelect = (props) => {
  const createButton = (info) => {
    return (
      <AgentButton
        key={info.uuid}
        agent={info.displayName}
        img={info.displayIcon}
      />
    );
  };
  return (
    <section className={classes.agentSelectContainer}>
      <h2>{props.role}</h2>
      <p>{props.roleDescription}</p>
      <Selection>{props.data.map(createButton)}</Selection>
    </section>
  );
};

export default AgentSelect;
