import React, { useEffect, useState } from "react";
import AgentSelect from "../AgentSelect/AgentSelect";
import AgentInfo from "../layout/AgentInfo";
import Wrapper from "../layout/Wrapper";
import RoleSelect from "../RoleSelect/RoleSelect";
import Header from "../UI/Header";
import classes from "./Agents.module.css";

const Agents = () => {
  const [agents, setAgents] = useState();
  const [selectedAgent, setSelectedAgent] = useState({});
  const [agentSelected, setAgentSelected] = useState(false);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("");
  const [roleSelected, setRoleSelected] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((res) => res.json())
      .then(
        (result) => {
          const filtered = result.data.filter(
            (agent) =>
              agent.isPlayableCharacter === true &&
              agent.role.displayName === role
          );
          setIsLoaded(true);
          setAgents(filtered);
        },
        (error) => {
          setError(error);
        }
      );
  }, [role]);

  const onRoleSelect = (r) => {
    setRole(r);
    setRoleSelected(true);
  };

  const onAgentSelect = (a) => {
    let agent = agents.filter((item) => item.displayName === a);
    setSelectedAgent(agent);
    setAgentSelected(true);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <Header resetRole={setRoleSelected} resetAgent={setAgentSelected} />
        <Wrapper>
          {!roleSelected ? (
            <RoleSelect onClick={onRoleSelect} />
          ) : roleSelected && agentSelected ? (
            <AgentInfo data={selectedAgent[0]} />
          ) : (
            agents && (
              <AgentSelect role={role} data={agents} onClick={onAgentSelect} />
            )
          )}
        </Wrapper>
      </React.Fragment>
    );
  }
};

export default Agents;
