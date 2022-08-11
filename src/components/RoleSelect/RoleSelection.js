import React from "react";
import Selection from "./Selection";
import controller from "../../assets/ControllerClassSymbol.webp";
import initiator from "../../assets/InitiatorClassSymbol.webp";
import duelist from "../../assets/DuelistClassSymbol.webp";
import sentinel from "../../assets/SentinelClassSymbol.webp";
import Button from "../UI/Button";

const RoleSelection = (props) => {
  return (
    <Selection default={props.default}>
      <Button
        default={props.default}
        img={controller}
        role="Controller"
        onClick={props.onClick}
      />
      <Button
        default={props.default}
        img={initiator}
        role="Initiator"
        onClick={props.onClick}
      />
      <Button
        default={props.default}
        img={duelist}
        role="Duelist"
        onClick={props.onClick}
      />
      <Button
        default={props.default}
        img={sentinel}
        role="Sentinel"
        onClick={props.onClick}
      />
    </Selection>
  );
};

export default RoleSelection;
