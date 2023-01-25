import React from "react";
import { Box, Grid } from "@material-ui/core";
import { isMobile } from "utils";
import useStyles from "./styles";
import backIcon from "assets/BackIcon.png";

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={2}>
        <Box
          className={classes.containerBack}
          onClick={() => console.log("irru")}
        >
          <Box className={classes.imageBackIcon}>
            <img alt="backIcon" src={backIcon} />
          </Box>
          {!isMobile() && <Box className={classes.text}>Voltar</Box>}
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box className={classes.containerBrand}>
          {/* <img alt="brand" src={brand} /> */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
