import React from "react";
import classes from "./BackButton.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  return (
    <button className={`${classes.backBtn} ${classes.bg_slider}`}>
      <ArrowBackIcon sx={{ fontSize: 60 }} />
    </button>
  );
};

export default BackButton;
