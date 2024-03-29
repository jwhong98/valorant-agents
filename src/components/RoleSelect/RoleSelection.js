import React from "react";
import classes from "./RoleSelection.module.css";
import Selection from "./Selection";
import controller from "../../assets/ControllerClassSymbol.webp";
import initiator from "../../assets/InitiatorClassSymbol.webp";
import duelist from "../../assets/DuelistClassSymbol.webp";
import sentinel from "../../assets/SentinelClassSymbol.webp";
import Button from "../UI/Button";

const RoleSelection = (props) => {
  return (
    <div className={props.default ? "" : classes.roleSelectionSmall}>
      <Selection default={props.default}>
        <Button
          default={props.default}
          img={controller}
          role="Controller"
          onClick={props.onClick}
          activeRole={props.activeRole}
        />
        <Button
          default={props.default}
          img={initiator}
          role="Initiator"
          onClick={props.onClick}
          activeRole={props.activeRole}
        />
        <Button
          default={props.default}
          img={duelist}
          role="Duelist"
          onClick={props.onClick}
          activeRole={props.activeRole}
        />
        <Button
          default={props.default}
          img={sentinel}
          role="Sentinel"
          onClick={props.onClick}
          activeRole={props.activeRole}
        />
      </Selection>
    </div>
  );
};

export default RoleSelection;
