import React from "react";
import Button from "../UI/Button";
import classes from "./Selection.module.css";
import controller from "../../assets/ControllerClassSymbol.webp";
import initiator from "../../assets/InitiatorClassSymbol.webp";
import duelist from "../../assets/DuelistClassSymbol.webp";
import sentinel from "../../assets/SentinelClassSymbol.webp";

const Selection = () => {
  return (
    <div className={classes.selectionContainer}>
      <Button img={controller} />
      <Button img={initiator} />
      <Button img={duelist} />
      <Button img={sentinel} />
    </div>
  );
};

export default Selection;
