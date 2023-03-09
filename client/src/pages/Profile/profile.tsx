import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import useStyles from "./styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";

const Header: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.container} display="flex">
      <Box
        className={classes.containerBack}
        onClick={() => navigate(routes.login)}
      >
        <Box className={classes.imageBackIcon}>
          <ArrowBackIosNewIcon fontSize="small" />
        </Box>
        <Box className={classes.text}>Sair</Box>
      </Box>
      <Typography variant="h6" fontWeight="bold" paddingTop="4px">
        POSSO FALTAR?
      </Typography>
      <Box className={classes.boxProfile}>
        <Typography
          variant="h6"
          fontWeight="bold"
          paddingTop="4px"
          paddingRight="4px"
        >
          Perfil
        </Typography>
        <AccountCircleIcon className={classes.imageMenuItem} />
      </Box>
    </Box>
  );
};

export default Header;
