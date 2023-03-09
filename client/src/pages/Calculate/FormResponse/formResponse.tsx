import React from "react";
import { Paper } from "@material-ui/core";
import { Typography } from "@mui/material";
import useStyles from "./styles";
import { isMobile } from "utils";

const FormResponse: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper
      elevation={3}
      className={isMobile() ? classes.paperCalcMob : classes.paperCalc}
    >
      <Typography
        variant="subtitle1"
        color="#000000"
        fontFamily="'NotoSans', Arial, Helvetica, sans-serif"
      >
        Escolha como realizar sua busca:
      </Typography>
    </Paper>
  );
};

export default FormResponse;
