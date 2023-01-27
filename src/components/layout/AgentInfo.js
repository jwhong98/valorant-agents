import React from "react";
import Abilities from "../Abilities/Abilities";
import AgentSelection from "../AgentSelect/AgentSelection";
import classes from "./AgentInfo.module.css";

const AgentInfo = (props) => {
  return (
    <section className={classes.agentInfo}>
      <div className={classes.gridContainer}>
        <div
          className={classes.imgWrap}
          style={{ backgroundImage: `url(${props.agent.full})` }}
        >
          <img src={props.agent.fullPortrait} alt="" />
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
      <AgentSelection
        data={props.data}
        default={false}
        onAgentSelect={props.onAgentSelect}
        activeAgent={props.agent.displayName}
      />
    </section>
  );
};

export default AgentInfo;
