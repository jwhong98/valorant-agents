import React from "react";
import classes from "./RoleSelect.module.css";
import Selection from "./Selection";
import controller from "../../assets/ControllerClassSymbol.webp";
import initiator from "../../assets/InitiatorClassSymbol.webp";
import duelist from "../../assets/DuelistClassSymbol.webp";
import sentinel from "../../assets/SentinelClassSymbol.webp";
import Button from "../UI/Button";

const RoleSelect = (props) => {
  console.log("RoleSelect rendered");
  return (
    <section className={classes.roleSelect}>
      <h2>Select Your Role</h2>
      <Selection>
        <Button img={controller} role="Controller" onClick={props.onClick} />
        <Button img={initiator} role="Initiator" onClick={props.onClick} />
        <Button img={duelist} role="Duelist" onClick={props.onClick} />
        <Button img={sentinel} role="Sentinel" onClick={props.onClick} />
      </Selection>
    </section>
  );
};

export default RoleSelect;
