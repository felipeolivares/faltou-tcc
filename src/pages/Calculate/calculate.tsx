import React, { useState } from "react";
import { Box, Grid, Divider } from "@material-ui/core";
import { Header } from "../index";
import { Typography } from "@mui/material";
import { isMobile } from "utils";
import useStyles from "../styles";

const Calculate: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className="container" display="flex">
      <Box className="container-box" display="flex">
        <Grid container xs={12}>
          <Grid item xs={!isMobile() ? 6 : 12}>
            <Header />
            <Box className={classes.divider}>
              <Divider />
            </Box>
            <Box className={!isMobile() ? "content" : ""}>
              <Box className="mr24-ml24-pt24">
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    color="#333333"
                    fontWeight="bold"
                    fontFamily="'NotoSans-Bold', Arial, Helvetica, sans-serif"
                  >
                    Encontre um Dentista Credenciado
                  </Typography>
                </Grid>
                <Grid item xs={12} className="pt16">
                  <Typography
                    variant="subtitle1"
                    color="#000000"
                    fontFamily="'NotoSans', Arial, Helvetica, sans-serif"
                  >
                    Escolha como realizar sua busca:
                  </Typography>
                </Grid>
              </Box>
            </Box>
          </Grid>
          {!isMobile() && (
            <Grid item xs={6}>
              {/* <Map /> */}
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Calculate;
