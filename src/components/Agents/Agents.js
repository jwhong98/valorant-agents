import React from "react";
import Wrapper from "../layout/Wrapper";
import RoleSelect from "../RoleSelect/RoleSelect";
import Header from "../UI/Header";
import classes from "./Agents.module.css";

const Agents = () => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <RoleSelect />
      </Wrapper>
    </React.Fragment>
  );
};

export default Agents;
