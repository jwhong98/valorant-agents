import React from "react";
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
      />
    );
  };
  return <Selection>{props.data.map(createButton)}</Selection>;
};

export default AgentSelection;
