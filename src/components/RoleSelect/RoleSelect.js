import React from "react";
import classes from "./RoleSelect.module.css";
import Selection from "./Selection";
import controller from "../../assets/ControllerClassSymbol.webp";
import initiator from "../../assets/InitiatorClassSymbol.webp";
import duelist from "../../assets/DuelistClassSymbol.webp";
import sentinel from "../../assets/SentinelClassSymbol.webp";
import Button from "../UI/Button";

const RoleSelect = () => {
  return (
    <section className={classes.roleSelect}>
      <h2>Select Your Role</h2>
      <Selection>
        <Button img={controller} role="controller" />
        <Button img={initiator} role="initiator" />
        <Button img={duelist} role="duelist" />
        <Button img={sentinel} role="sentinel" />
      </Selection>
    </section>
  );
};

export default RoleSelect;
