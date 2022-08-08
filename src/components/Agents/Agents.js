import React, { useEffect, useState } from "react";
import AgentSelect from "../AgentSelect/AgentSelect";
import AgentInfo from "../layout/AgentInfo";
import Wrapper from "../layout/Wrapper";
import RoleSelect from "../RoleSelect/RoleSelect";
import Header from "../UI/Header";
import classes from "./Agents.module.css";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((res) => res.json())
      .then(
        (result) => {
          //temp
          const filtered = result.data.filter(
            (agent) =>
              agent.isPlayableCharacter === true &&
              agent.role.displayName === "Duelist"
          );
          setIsLoaded(true);
          setAgents(filtered);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <Header />
        <Wrapper>
          {/* <RoleSelect /> */}
          {/* <AgentSelect
            role="duelist"
            roleDescription="Duelists are the offensive experts in VALORANT with abilities that allow them to be aggressive and self-sufficient when creating opportunities to engage with opponents"
            data={agents}
          /> */}
          <AgentInfo data={agents[0]} />
        </Wrapper>
      </React.Fragment>
    );
  }
};

export default Agents;
