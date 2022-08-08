import React from "react";
import Abilities from "../Abilities/Abilities";
import AgentSelect from "../AgentSelect/AgentSelect";
import classes from "./AgentInfo.module.css";

const AgentInfo = ({ data }) => {
  return (
    <section className={classes.agentInfo}>
      <div className={classes.gridContainer}>
        <div className={classes.imgWrap}>
          <img src={data.fullPortraitV2} alt="" />
        </div>
        <div className={classes.infoWrap}>
          <div className={classes.infoWrap__header}>
            <img src={data.role.displayIcon} alt={data.role.displayName} />
            <h2>{data.displayName}</h2>
          </div>
          <div className={classes.infoWrap__agentDescription}>
            <p>{data.description}</p>
          </div>
          <Abilities data={data.abilities} />
          <div className={classes.infoWrap__abilitiesInfo}>
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentInfo;
