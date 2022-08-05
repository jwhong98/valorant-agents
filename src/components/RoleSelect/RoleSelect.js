import React from "react";
import classes from "./RoleSelect.module.css";
import Selection from "./Selection";

const RoleSelect = () => {
  return (
    <section className={classes.roleSelect}>
      <h2>Select Your Role</h2>
      <Selection />
    </section>
  );
};

export default RoleSelect;
