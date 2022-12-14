import React from "react";
import Abilities from "../Abilities/Abilities";
import AgentSelection from "../AgentSelect/AgentSelection";
import classes from "./AgentInfo.module.css";

const AgentInfo = (props) => {
  return (
    <section className={classes.agentInfo}>
      <AgentSelection
        data={props.data}
        default={false}
        onAgentSelect={props.onAgentSelect}
      />
      <div className={classes.gridContainer}>
        <div className={classes.imgWrap}>
          <img src={props.agent.fullPortraitV2} alt="" />
        </div>
        <div className={classes.infoWrap}>
          <div className={classes.infoWrap__header}>
            <img
              src={props.agent.role.displayIcon}
              alt={props.agent.role.displayName}
            />
            <h2>{props.agent.displayName}</h2>
          </div>
          <div className={classes.infoWrap__agentDescription}>
            <p>{props.agent.description}</p>
          </div>
          <Abilities data={props.agent.abilities} />
        </div>
      </div>
    </section>
  );
};

export default AgentInfo;
