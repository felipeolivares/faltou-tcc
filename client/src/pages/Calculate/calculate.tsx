import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { Typography } from "@mui/material";
import { isMobile } from "utils";
import useStyles from "../styles";
import Header from "pages/Header/header";

const Calculate: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Box className="container-box" display="flex">
        <Grid container>
          <Grid item xs={isMobile() ? 12 : 6}>
            <Paper elevation={3} className={classes.paperCalc}>
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
            </Paper>
          </Grid>
          <Grid item xs={isMobile() ? 12 : 6}>
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
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Calculate;
