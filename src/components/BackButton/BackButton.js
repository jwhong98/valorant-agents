import React from "react";
import classes from "./BackButton.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };
  return (
    <button
      className={`${classes.backBtn} ${classes.bg_slider}`}
      onClick={onClickHandler}
    >
      <ArrowBackIcon
        sx={{
          width: 100,
          height: 60,
          "&:hover": { color: "white" },
        }}
      />
    </button>
  );
};

export default BackButton;
