import React from "react";
import { Box, Grid } from "@material-ui/core";
import { isMobile } from "utils";
import useStyles from "./styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";

const Header: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.container} display="flex">
      <Grid container>
        <Grid item xs={2}>
          <Box
            className={classes.containerBack}
            onClick={() => navigate(routes.login)}
          >
            <Box className={classes.imageBackIcon}>
              <ArrowBackIosNewIcon fontSize="small" />
            </Box>
            {!isMobile() && <Box className={classes.text}>Sair</Box>}
          </Box>
        </Grid>
        <Grid item xs={8}>
          {/* <img alt="brand" className={classes.containerBrand} src={logo} /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
