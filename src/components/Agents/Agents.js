import React, { useEffect, useState } from "react";
import AgentSelect from "../AgentSelect/AgentSelect";
import Wrapper from "../layout/Wrapper";
import RoleSelect from "../RoleSelect/RoleSelect";
import Header from "../UI/Header";
import classes from "./Agents.module.css";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((res) => res.json())
      .then((result) => {
        //temp
        const filtered = result.data.filter(
          (agent) =>
            agent.isPlayableCharacter === true &&
            agent.role.displayName === "Duelist"
        );
        setAgents(filtered);
      });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        {/* <RoleSelect /> */}
        <AgentSelect
          role="duelist"
          roleDescription="Duelists are the offensive experts in VALORANT with abilities that allow them to be aggressive and self-sufficient when creating opportunities to engage with opponents"
          data={agents}
        />
      </Wrapper>
    </React.Fragment>
  );
};

export default Agents;
