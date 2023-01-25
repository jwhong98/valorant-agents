import React from "react";
import classes from "./RoleSelect.module.css";
import RoleSelection from "./RoleSelection";

const RoleSelect = (props) => {
  return (
    <section className={classes.roleSelect}>
      <h2>Select Your Role</h2>
      <RoleSelection
        onClick={props.onRoleSelect}
        default={true}
        activeRole={props.activeRole}
      />
    </section>
  );
};

export default RoleSelect;
