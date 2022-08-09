import React from "react";
import Selection from "../RoleSelect/Selection";
// import Button from "../UI/Button";
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
        onClick={props.onClick}
      />
    );
  };
  return (
    <section className={classes.agentSelectContainer}>
      <h2>{props.role}</h2>
      {props.data[0] && <p>{props.data[0].role.description}</p>}
      <Selection>{props.data.map(createButton)}</Selection>
    </section>
  );
};

export default React.memo(AgentSelect);
